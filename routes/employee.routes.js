module.exports = app => {
  const employees = require("../handlers/employee.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", function(req, res){employees.create});
 

 
  router.get("/", employees.employeeList);
  
  router.post('/search', function(req, res){
    employees.employeeSearch
  });
  router.post('/create', function(req, res){
    employees.employeeCreate});
  app.use('/api/employee', router);

  
};


