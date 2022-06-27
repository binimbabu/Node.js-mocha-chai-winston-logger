module.exports = app => {
  const employees = require("../controllers/employee.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", employees.create);
  // Retrieve all Tutorials
  router.get("/", employees.findAll);
  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);
  // // Retrieve a single Tutorial with id
  router.get("/:id", employees.findOne);

 

  
  
  // app.get("/users", employees.paginatedResults(), (req, res) => {
  //   res.json(res.paginatedResults);
  // });
  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);
  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);
  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);
  app.use('/api/employee', router);

  
};


