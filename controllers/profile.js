const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change
const SESHSALT = 'summer';

module.exports = (db) => {

    let profileView = (req,res)=>{
        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username);
        if(checkSessionId == req.cookies.sessionId){
            db.freeL.findUser(req.params, (err, result)=>{
                if( err ){
                    res.send('Error!');
                } else {
                    console.log('VIEWWWWINGGGGG');
                    console.log(result.rows[0]);
                    const data = result.rows[0];

                    res.render('profile/profile', {data})
                }
            })
        } else{
            res.send('Please log in again');
        }
    }

    let profileEditForm = (req,res)=>{
        const checkSessionId = sha256 (SALT + SESHSALT + req.cookies.username);
        if(checkSessionId == req.cookies.sessionId){
            db.freeL.findUser(req.params, (err,result)=>{
                if( err ){
                    res.send('Error!');
                } else {
                    console.log('EDIT VIEWWWINGGG');
                    console.log(result.rows[0]);
                    const data = result.rows[0];

                    res.render('profile/edit', {data})
                }
            })
        } else {
            res.send('Please log in again');
        }
    }

    let editCallback = (req,res)=>{

        db.freeL.findUser(req.params, (err,result)=>{
            console.log('IN EDDITTTT CONTROLLERRR')
            console.log(req.body);
            const latestData = req.body;
            if( err ){
                    res.send('Error!');
            } else {
                const userId = result.rows[0].id;
                const data = { userId, latestData};

                console.log(data);
                db.freeL.edit(data, (err, result)=>{
                    if( err ){
                        res.send('Error!');
                    } else {
                        db.freeL.findUser(req.params, (err, result)=>{
                            if( err ){
                                res.send('Error!');
                            } else {
                                console.log('VIEWWWWINGGGGG');
                                console.log(result.rows[0]);
                                const data = result.rows[0];
                                res.render('profile/profile', {data})
                            }
                        })
                    }
                })
            }
        })
    }

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    view: profileView,
    editForm: profileEditForm,
    edit: editCallback,

  };
}