module.exports = (db) => {

    //MAKE CONTACT REQUIRES CURRENT USER, ALL COMMENTS & PROFILE VIEWED INFO

    const testStuff = (req,res)=> {

        res.render('chat/index')

    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    test : testStuff,
  };
}