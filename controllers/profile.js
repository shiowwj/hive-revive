const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change
const SESHSALT = 'summer';

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

module.exports = (db) => {

    let profileView = (req,res)=>{

        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username);
        let userName = req.params;

        if(checkSessionId == req.cookies.sessionId){

            const findUser = (userDetails) => {
                res.render('profile/profile', {data: userDetails})
            }

            db.users.findUser( userName, findUser );

        } else if (checkSessionId !== req.cookies.sessionId){

            res.send('Please log in again');
        }
    }

    let profileEditForm = (req,res)=>{

        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username);
        //NEED TO AUTHENTICATE!!!
        if(checkSessionId == req.cookies.sessionId){

            const findUser = ( userDetails ) =>{
                const data = userDetails;
                res.render('profile/edit', {data})
            }

            db.users.findUser( req.params, findUser );

        } else {

            res.send('Please log in again');
        }
    }

    let editRequest = (req,res)=>{

        const findUser = ( userDetails ) =>{

            const latestData = req.body;
            const userId = userDetails.id;

            const dataEdit =  {userId, latestData}


            const edit = ( resultEdit ) => {

                res.render('profile/profile', {data : userDetails})
            }

            db.users.edit( dataEdit, edit );
        }

        db.users.findUser( req.params, findUser );
    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    view: profileView,
    editForm: profileEditForm,
    edit: editRequest,

  };
}