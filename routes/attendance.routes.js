module.exports = app => {
    const attendance = require("../handlers/attendance.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/" , function(req, res){
      attendance.create});
    router.get('/attend', attendance.employeeListAttendence);
    router.get('/view', attendance.employeeViewAttendence);
    app.use('/api/attendance', router);
  
    
  };
  
  