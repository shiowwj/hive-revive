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

        const findUser = (result) =>{

            if(result == null){

                res.render('login/fail');
            } else if(result.username == req.body.username && result.password == req.body.password){

                const allExcept = ( otherUsers ) => {

                    res.cookie('username', result.username);
                    res.cookie('userId', result.id);
                    res.cookie('sessionId' , loginSessionId);
                    res.cookie('type', result.type);

                    const userDetails = {userId: result.id,
                                         username: result.username,
                                         sessionId: loginSessionId,
                                         profile_desc: result.profile_desc,
                                         interest: result.interest,
                                         location: result.location,
                                         profile_pic_url: result.profile_pic_url,
                                         created_at: result.created_at,
                                         type: result.type,
                                         };

                    const data = { userDetails, otherUsers};

                    res.render('home/home', {data});
                }

                db.users.viewAllExcept(req.body, allExcept);
            } else {
                res.render('login/fail');
            }
        }
        db.users.findUser(req.body, findUser);
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
        let checkIfUsernameTaken = (result) =>{
            if(result){

                let addUser = (resultAdd) =>{

                    const loginSessionId = sha256( SALT + SESHSALT + req.body.username);
                    //send cookies
                    res.cookie('userId', resultAdd.rows[0].id);
                    res.cookie('username', resultAdd.rows[0].username);
                    res.cookie('sessionId' , loginSessionId);
                    res.cookie('type', resultAdd.rows[0].type);
                    res.render('login/success', {resultAdd});
                }

                db.users.add(req.body, addUser);

            }else if (!result) {
                res.send('User Name taken');
            }
        }

        db.users.check( enteredUser, checkIfUsernameTaken );
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