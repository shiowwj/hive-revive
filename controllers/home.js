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

    let homeView = (req, res) => {

        // db.tweeds.allTweeds((err,resultTweeds)=>{
        //     if( err ){
        //         response.status(500).send('Error');
        //     } else {
                 //
                const userName = req.cookies;
                db.freeL.findUser(userName, (err,result)=>{
                    if( err ){
                        response.status(500).send('Error');
                    } else {
                        const userDetails = result.rows[0];

                        db.freeL.viewAllExcept(req.cookies.userId, (err, result_OtherUsers)=>{
                            // console.log('OTHER USERSSSS');
                            // console.log(result_OtherUsers.rows);
                            let resultTweeds = null;

                            const otherUsers = result_OtherUsers.rows;

                            const data = {userDetails, resultTweeds , otherUsers}
                            res.render('home/home', {data});
                        })
                    }
                })
            // }
        // });
    };

    let add_home = (req,res) => {

        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username); // check if user is same session
        if(checkSessionId == req.cookies.sessionId){

            const dataIn = { twds: req.body , userId: req.cookies.userId}; // add tweet. based on which user.

            db.tweeds.addTweeds(dataIn, (err,result)=>{
                if( err ){
                    response.status(500).send('Error');
                } else {
                    // console.log('TWEED RESULTS');
                    // console.log(result);
                    db.tweeds.allTweeds((err,resultTweeds)=>{
                        if( err ){
                            response.status(500).send('Error');
                        } else {
                            const userName = req.cookies;
                            db.fl_users.findUser(userName, (err,result)=>{
                                if( err ){
                                    response.status(500).send('Error');
                                } else {
                                    const userDetails = result.rows[0];
                                    db.freeL.viewAllExcept(req.cookies.userId, (err, result_OtherUsers)=>{
                                        // console.log('OTHER USERSSSS');
                                        // console.log(result_OtherUsers.rows);
                                        const otherUsers = result_OtherUsers.rows;

                                        const data = {userDetails, resultTweeds , otherUsers}
                                        res.render('home/home', {data});
                                    })
                                }
                            })
                        }
                    });
                }
            });
        } else {
            res.send('login in again'); /// put a redirect page to login again
        }
    };

    let follow_other_users = (req,res)=>{
        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username); // check if user is same session
        if(checkSessionId == req.cookies.sessionId){

            db.tweeds.allTweeds((err,resultTweeds)=>{ // list all tweeds
                if( err ){
                    response.status(500).send('Error');
                } else {
                    const userName = req.cookies;
                    db.freeL.findUser(userName, (err,result)=>{
                        if( err ){
                            response.status(500).send('Error');
                        } else {
                            const userDetails = result.rows[0];
                            const data = {userDetails, resultTweeds}
                            res.render('home/home', {data});
                        }
                    })
                }
            });
        } else {
            res.send('login in again'); /// put a redirect page to login again
        }
    };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeView,
    add: add_home,
    followOthers: follow_other_users,
  };
}

let cookieChecker = (reqCookie)=>{
    console.log('INSIDE THE COOKIE MONSTER!!!')
    console.log(reqCookie);
}