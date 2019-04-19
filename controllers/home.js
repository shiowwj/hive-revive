const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change
const SESHSALT = 'summer';

module.exports = (db) => {


  /**
   * =============users=============================
   * Controller logic
   * ===========================================
   */

    let homeView = (req, res) => {

        const userName = req.cookies;

        const findUser = (userDetails) => {

            const allExcept = (otherUsers) => {
                const data = { userDetails , otherUsers };
                res.render('home/home', {data})
            }

            db.users.viewAllExcept(userName, allExcept);
        }

        db.users.findUser(userName , findUser);

    };

    //not in use
    let sortBy = (req,res) =>{
        console.log("SORT STUFFF");
        console.log(req.query)

        res.send("HELLO");
    }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeView,
    sort: sortBy,
  };
}