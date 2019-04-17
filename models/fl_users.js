module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope


    let checkUser = (dataIn, callback)=>{

        let queryExist  = `SELECT * FROM users WHERE username ='${dataIn}'`;

        dbPool.query(queryExist, (err,r)=>{
            if( err ){
                callback(err,null)
            } else {
                if(r.rows.length === 0 ){
                    //user name can use.
                    callback(null, true);
                } else {
                    //user name taken. return null
                    callback(null, false);
                }
            }
        })
    };

    let addNewUser = (dataIn, callback) => {


        console.log('MODELLL  ADD USER');
        console.log(dataIn);

        let timeCreated = currentDateAndTime();

        let queryInsert = `INSERT INTO users
                           (username , password , profile_desc , interest , location ,  profile_pic_url , created_at , type )
                           VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)
                           RETURNING *`
        let valuesInsert =[dataIn.username, dataIn.password, dataIn.profile_desc, dataIn.interest, dataIn.location, dataIn.profile_pic_url, timeCreated, dataIn.type];

        dbPool.query(queryInsert, valuesInsert, (err, resultInsert) => {
            if( err ){
                console.log('1');
                callback(err,null)
            } else {
                console.log('2');
                callback(null,resultInsert);
            }
        });
    }

    let editUser = (dataIn,callback)=>{
        console.log('MODELLLL EDIT USER');
        console.log(dataIn);

        console.log('USER ID');
        console.log(dataIn.userId);

        console.log('THINGS TO UPDATE');
        console.log(dataIn.latestData.type)

        let timeCreated = currentDateAndTime();

        let queryEdit = `UPDATE users
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
                console.log('1');
                callback(err,null)
            } else {
                console.log('2');
                callback(null, resultEdit);
            }
        });
    }

    let findUser = (dataIn, callback)=>{

        // console.log('SUTTFIN INSIDE');
        // console.log(dataIn);

        let query = `SELECT * FROM users WHERE username='${dataIn.username}'`;

        dbPool.query( query, (err,r)=>{
            console.log('FINDDDIDNGGGGG');
            console.log(r);
            if(err){ // error in query
                callback(err,null);
            } else {
                if(r.rows.length == 0){ //username not found
                    callback(null,null);
                } else {
                    callback(null,r);
                }
            }
        })
    };

    let viewSingleUser = (dataIn,callback)=>{
        // console.log('1');
        // console.log(dataIn);
        let query = `SELECT * FROM users WHERE username='${dataIn}'`;

        dbPool.query(query, (err,r)=>{
            // console.log('2')
            // console.log(r);
            if( err ){
                // console.log('3')
                callback(err, null);
            } else {
                if( r.rows[0].password == dataIn.password ){
                    // console.log('3');
                    // console.log(r);
                    callback(null, r);
                } else {

                    //password does not match
                    callback(err, null);
                }
            }
        });
    };

    let viewAllUsersExceptCurrent = (dataIn,callback)=>{

        const query = `SELECT id,username FROM users WHERE id > 0
                       EXCEPT
                       SELECT id,username FROM users WHERE id = ${dataIn}`

        dbPool.query(query, (err,r)=>{
            // console.log('DONE QUERRRRRYYY USERS');
            // console.log(r);
            if( err ){
                callback(err,null);
            } else {
                callback(null,r);
            }
        })
    };






  return {
    add: addNewUser,
    check: checkUser,
    findUser: findUser,
    view: viewSingleUser,
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