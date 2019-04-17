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

    // required controllers
    const loginControllerCallbacks = require('./controllers/login')(allModels);
    const homeControllerCallbacks = require('./controllers/home')(allModels);
    const viewProfileControllerCallbacks = require('./controllers/profile')(allModels);



    //LOGIN PAGE
    app.get('/login', loginControllerCallbacks.login);
    //LOGIN SUCCESS REQUEST PAGE
    app.post('/login', loginControllerCallbacks.successL);

     //NEW USERS FORM
    app.get('/register/user', loginControllerCallbacks.registerU);
    app.get('/register/entity', loginControllerCallbacks.registerE);
    //ADD NEW USERS REQUEST
    app.post('/register/user', loginControllerCallbacks.successR);



    //VIEW USER DATA
    app.get('/profile/:username', viewProfileControllerCallbacks.view);
    //EDIT USER DATA FORM
    app.get('/profile/:username/edit', viewProfileControllerCallbacks.editForm);
    app.put('/profile/:username', viewProfileControllerCallbacks.edit);


    //delete user data


    //HOME PAGE
    app.get('/home', homeControllerCallbacks.home);


    //SORTING


};