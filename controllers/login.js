const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change
const SESHSALT = 'summer';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let loginStart = (req, res) => {

        res.render('login/login');
    };

    let loginSucess = (req,res) => {
        req.body.password = sha256( SALT + req.body.password );
        const loginSessionId = sha256( SALT + SESHSALT + req.body.username);
        db.freeL.findUser(req.body, (err,result)=>{
            if( err ){ //if err returns true
                res.send('Error!');
            } else { // need to check results
                // console.log('stuffffff');
                // console.log(result);
                if(result == null){//user does not exist,
                    res.render('login/fail');
                } else if (result.rows[0].username == req.body.username && result.rows[0].password == req.body.password){ //password and username matches database entry -- works

                    // updates cookies, search for other users.
                    db.freeL.viewAllExcept(req.body.username, (err, result_OtherUsers)=>{
                            // console.log('OTHER USERSSSS');
                            // console.log(result_OtherUsers.rows);
                        res.cookie('username', result.rows[0].username);
                        res.cookie('userId', result.rows[0].id);
                        res.cookie('sessionId' , loginSessionId);
                        res.cookie('type', result.rows[0].type);

                        let resultTweeds = null;

                        const otherUsers = result_OtherUsers.rows;

                        const userDetails = {userId: result.rows[0].id,
                                             username: result.rows[0].username,
                                             sessionId: loginSessionId,
                                             profile_desc: result.rows[0].profile_desc,
                                             interest: result.rows[0].interest,
                                             location: result.rows[0].location,
                                             profile_pic_url: result.rows[0].profile_pic_url,
                                             created_at: result.rows[0].created_at,
                                             type: result.rows[0].type,
                                            };

                        const data = {userDetails, resultTweeds , otherUsers}
                        res.render('home/home', {data});
                        })
                } else { // password and user name wrong
                    res.render('login/fail');
                }
            }
        })
    }

    let registerStartUser = (req,res) => {
        res.render('login/registerUser');
    }

    let registerStartEntity = (req,res) => {
        res.render('login/registerEntity');
    }

    let registerSuccess = (req,res) => {

        // check if username taken
        let enteredUser = req.body.username;

        req.body.password = sha256( SALT + req.body.password );

        //checks if username taken
        db.freeL.check(enteredUser, (err, result) =>{

            if( err ){
                res.send('error');
            } else {
                if(result == false){
                    res.send('User Name taken');
                } else if(result == true){ ///can use the username. create account

                    db.freeL.add(req.body, (err, resultAdd)=>{
                        // console.log('ADDDED');// ADD ACCOUNT DETAILS
                        // console.log(resultAdd)

                        const loginSessionId = sha256( SALT + SESHSALT + req.body.username);
                        //send cookies
                        res.cookie('userId', resultAdd.rows[0].id);
                        res.cookie('username', resultAdd.rows[0].username);
                        res.cookie('sessionId' , loginSessionId);
                        res.cookie('type', result.rows[0].type);
                        res.render('login/success', {resultAdd});
                    })
                }
            }
        })
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginStart,
    registerU: registerStartUser,
    registerE: registerStartEntity,
    successL: loginSucess,
    successR: registerSuccess,
  };
}