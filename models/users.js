module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope

  //CHECKS IF USER EXIST
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

    //INSERTS NEW USER DETAILS
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

    //EDIT EXISTING USER DETAILS
    let editUser = (dataIn,callback)=>{

        let timeCreated = currentDateAndTime();

        let queryEdit = `  UPDATE users
                           SET
                           username = '${dataIn.latestData.username}',
                           profile_desc = '${dataIn.latestData.profile_desc}',
                           interest = '${dataIn.latestData.interest}',
                           location = '${dataIn.latestData.location}',
                           profile_pic_url = '${dataIn.latestData.profile_pic_url}',
                           type = '${dataIn.latestData.type}',
                           name = '${dataIn.latestData.name}'
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

    //LOOKS FOR SPECIFIC USER DETAILS
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

    //LOOKS FOR ALL OTHER USER DETAILS EXCEPT CURRENT USER
    let viewAllUsersExceptCurrent = (dataIn,callback)=>{

        const query = `SELECT id,username, interest, profile_pic_url, profile_desc, location, type, name  FROM users WHERE id > 0
                       EXCEPT
                       SELECT id,username, interest, profile_pic_url, profile_desc, location, type, name FROM users WHERE username = '${dataIn.username}'`;

        dbPool.query(query, (err,r)=>{
            // console.log('DONE QUERRRRRYYY USERS');
            // console.log(r);
            if( err ){
                console.log( "Error!", err );
            } else {
                if(r.rows.length == 0){ //username not found
                    callback( null );
                } else {
                    const allExcept = r.rows;
                    callback(allExcept);
                }
            }
        })
    };

    //SEARCH DB FOR SIMILIAR LOCATION
    let crudeSearchLocation = (dataIn, callback) =>{


        const query = `SELECT * FROM users WHERE location LIKE '%${dataIn}%';`

        dbPool.query(query, (err,r) =>{
            console.log('DONE QUERRRRRYYY USERS');
            console.log(r);
            if( err ){
                console.log( "Error!", err );
            } else {
                const result = r.rows;
                callback(result);
            }
        })
    };





  return {
    add: addNewUser,
    check: checkUser,
    findUser: findUser,
    viewAllExcept : viewAllUsersExceptCurrent,
    edit: editUser,
    searchLocation: crudeSearchLocation
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