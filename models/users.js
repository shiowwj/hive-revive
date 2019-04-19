module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope


    let checkUser = (dataIn, callback)=>{

        let queryExist  = `SELECT * FROM users WHERE username ='${dataIn}'`;

        dbPool.query(queryExist, (err,r)=>{
            if( err ){
                console.log( "Error!", err );
            } else {
                if(r.rows.length === 0 ){
                    //user name can use.
                    callback(true);
                } else {
                    //user name taken. return null
                    callback(false);
                }
            }
        })
    };

    let addNewUser = (dataIn, callback) => {

        let timeCreated = currentDateAndTime();

        let queryInsert = `INSERT INTO users
                           (username , password , profile_desc , interest , location ,  profile_pic_url , created_at , type )
                           VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)
                           RETURNING *`;

        let valuesInsert =[dataIn.username, dataIn.password, dataIn.profile_desc, dataIn.interest, dataIn.location, dataIn.profile_pic_url, timeCreated, dataIn.type];

        dbPool.query(queryInsert, valuesInsert, (err, resultInsert) => {
            if( err ){
                console.log( "Error!", err );
            } else {
                // console.log('2');
                console.log(resultInsert);
                callback(resultInsert);
            }
        });
    };

    let editUser = (dataIn,callback)=>{

        let timeCreated = currentDateAndTime();

        let queryEdit = `  UPDATE users
                           SET
                           username = '${dataIn.latestData.username}',
                           profile_desc = '${dataIn.latestData.profile_desc}',
                           interest = '${dataIn.latestData.interest}',
                           location = '${dataIn.latestData.location}',
                           profile_pic_url = '${dataIn.latestData.profile_pic_url}',
                           type = '${dataIn.latestData.type}'
                           WHERE
                           id = ${dataIn.userId};`

        dbPool.query(queryEdit, (err, resultEdit) => {
            if( err ){
                console.log( "Error!", err );
            } else {
                callback(resultEdit);
            }
        });
    };

    let findUser = (dataIn, callback)=>{

        let query = `SELECT * FROM users WHERE username='${dataIn.username}'`;

        dbPool.query( query, (err,r)=>{

            if(err){ // error in query
                console.log( "Error!", err );
            } else {
                if(r.rows.length == 0){ //username not found
                    callback( null );
                } else {
                    const user = r.rows[0];
                    callback( user );
                }
            }
        })
    };

    let viewAllUsersExceptCurrent = (dataIn,callback)=>{

        const query = `SELECT id,username, interest, profile_pic_url, profile_desc, location, type FROM users WHERE id > 0
                       EXCEPT
                       SELECT id,username, interest, profile_pic_url, profile_desc, location, type FROM users WHERE username = '${dataIn.username}'`;

        dbPool.query(query, (err,r)=>{
            // console.log('DONE QUERRRRRYYY USERS');
            // console.log(r);
            if( err ){
                 console.log( "Error!", err );
            } else {
                const allExcept = r.rows
                callback(allExcept);
            }
        })
    };

    //NOT IN USE
    let viewBasedOnType = (dataIn, callback) =>{

    };





  return {
    add: addNewUser,
    check: checkUser,
    findUser: findUser,
    viewAllExcept : viewAllUsersExceptCurrent,
    edit: editUser,
  };
}


  /**
   * ===========================================
   * Helper Functions
   * ===========================================
   */


var currentDateAndTime = function(){
    let date = new Date();
    let dateAndTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ` + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return dateAndTime;
}