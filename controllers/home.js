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

   //HOME PAGE REQUIRES CURRENT USER AND OTHER USER INFO

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
    let search = (req,res) =>{

        capitalize =(str)=>{
            return str.charAt(0).toUpperCase()+str.slice(1);
        }


        console.log("SORT STUFFF");
        console.log(req.query.search)

        let string = capitalize(req.query.search);

        const userName = req.cookies;

        const findUser = (userDetails) =>{

            const searchLocation = (otherUsers) =>{

                const data = {userDetails, otherUsers };
                res.render('home/home', {data});
            }

            db.users.searchLocation(string, searchLocation);
        }

        db.users.findUser(userName , findUser);
    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeView,
    search: search,
  };
}