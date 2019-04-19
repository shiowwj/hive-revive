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


    const view = (req,res)=> {

        const userProfile = req.params;
        const currentUser = req.cookies;
        const findUser = (resultProfile) => {

            const viewComments = (resultComment) => {

                const user = (resultUser) => {

                    const data = { resultProfile, resultComment , resultUser};
                    res.render('contact/contactMain', {data} );
                }

                db.users.findUser(currentUser, user);
            }

            db.comments.allComments(userProfile, viewComments);
        }

        db.users.findUser(userProfile, findUser);
    }

    const addComment = (req,res) => {

        const comment = req.body.comments;
        const profileView = req.params.username;
        const userId = req.cookies.userId;

        const dataToModel = { comment, profileView, userId};
        const addComment = (resultAdded) => {

            const userProfile = req.params;
            const currentUser = req.cookies;
            const findUser = (resultProfile) => {

                const viewComments = (resultComment) => {

                    const user = (resultUser) => {

                        const data = { resultProfile, resultComment , resultUser};
                        res.render('contact/contactMain', {data} );
                    }

                    db.users.findUser(currentUser, user);
                }

                db.comments.allComments(userProfile, viewComments);
            }

            db.users.findUser(userProfile, findUser);
        }

        db.comments.add( dataToModel,  addComment );
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    view: view,
    addComment : addComment,
  };
}