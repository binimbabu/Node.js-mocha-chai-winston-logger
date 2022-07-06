module.exports = app => {
  const employees = require("../handlers/employee.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial

 

 
  router.get("/", employees.employeeList);
  
  router.post('/search', 
    employees.employeeSearch
  );
  router.post('/create', 
    employees.employeeCreate);
  app.use('/api/employee', router);

  
};


