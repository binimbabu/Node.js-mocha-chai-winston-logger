module.exports = app => {
  const attendance = require("../handlers/attendance.controller");
  var router = require("express").Router();

  router.post("/",
    attendance.create);
  router.get('/attend', attendance.employeeListAttendence);
  router.get('/view', attendance.employeeViewAttendence);
  app.use('/api/attendance', router);


};

