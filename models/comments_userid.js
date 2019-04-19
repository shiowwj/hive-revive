module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope


        //all comments for the  owner_user
        let allComments = (dataIn, callback) => {
            console.log('INSIDE QUERYYY')
            console.log(dataIn);
            // dataIn should give me the username of the profile page
            let query = `SELECT * FROM comments_userid WHERE owner_username = '${dataIn.username}'`;

            dbPool.query(query, ( err, r )=>{
                if( err ){
                    console.log( "Error!", err );
                } else {

                    const user = r.rows
                    callback( user );
                }
            })
        };



        //usernams of all the user_id commenting



  return {

    allComments: allComments,
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