module.exports = app => {
  const employees = require("../controllers/employee.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", employees.create);
  // Retrieve all Tutorials
  // router.get("/", employees.findAll);
  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);
  // // Retrieve a single Tutorial with id
  router.get("/:id", employees.findOne);

 
  router.get("/", employees.employeeList);
  
 
  app.use('/api/employee', router);

  
};


