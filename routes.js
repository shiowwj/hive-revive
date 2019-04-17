module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

    // required controllers for login page, home page
    const loginControllerCallbacks = require('./controllers/login')(allModels);
    const homeControllerCallbacks = require('./controllers/home')(allModels);
    const viewProfileControllerCallbacks = require('./controllers/profile')(allModels);

    // require the controller for users
    // const tweedsControllerCallbacks = require('./controllers/tweeds')(allModels);



    app.get('/login', loginControllerCallbacks.login); //--okay
    app.post('/login', loginControllerCallbacks.successL); //-- once logged in user would be directed to home page

     //create user (kia) data
    app.get('/register/user', loginControllerCallbacks.registerU);

    //create user (ah pek) data
    app.get('/register/entity', loginControllerCallbacks.registerE);

    app.post('/register/user', loginControllerCallbacks.successR);


    // app.post('/register/entity', loginControllerCallbacks.successR);


    //view user data
    app.get('/profile/:username', viewProfileControllerCallbacks.view);
    //edit user data
    app.get('/profile/:username/edit', viewProfileControllerCallbacks.editForm);
    app.put('/profile/:username', viewProfileControllerCallbacks.edit);

    //delete user data
    app.get('/home', homeControllerCallbacks.home);
    // app.post('/addtweeds', homeControllerCallbacks.add);

    // app.post('/following', homeControllerCallbacks.followOthers);

};