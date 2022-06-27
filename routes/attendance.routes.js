module.exports = app => {
    const attendance = require("../controllers/attendance.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", attendance.create);
    
    app.use('/api/attendance', router);
  
    
  };
  
  