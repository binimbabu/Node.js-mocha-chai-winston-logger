const Employee = require("../models/employee.model");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Tutorial
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    joining_date: req.body.joining_date,
    role: req.body.role,
  });
  // Save Tutorial in the database
  Employee.create(employee, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  Employee.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employee."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Employee.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Employee with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};



// // Find a single Tutorial with a id
// exports.findOne = (req, res) => {
  
// };
// // find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };
// // Update a Tutorial identified by the id in the request
// exports.update = (req, res) => {
  
// };
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// exports.paginatedResults = (req, res, next) => {
    
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);
//     const skipIndex = (page - 1) * limit;
//     const results = {};

//     try {
//       results.results = Employee.find()
//         .sort({ _id: 1 })
//         .limit(limit)
//         .skip(skipIndex)
//         .exec();
//       res.paginatedResults = results;
//       next();
//     } catch (e) {
//       res.status(500).json({ message: "Error Occured" });
//     }
//   };