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


    let view = (req,res)=>{

        let user = req.params;

        const findUser = (resultUser) =>{

            const viewComments = (resultComment) =>{

                const data = { resultUser, resultComment};

                res.render('connect/connectMain', {data} );
            }

            db.comments.allComments(user, viewComments);
        }

        db.users.findUser(user, findUser);

    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    view: view,
  };
}