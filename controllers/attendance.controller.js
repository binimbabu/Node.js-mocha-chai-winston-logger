const Attendance = require("../models/attendance.model");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Tutorial
  const attendance = new Attendance({
    empId: req.body.empId,
    present_Date: req.body.present_Date,
    present: req.body.present
  });
  // Save Tutorial in the database
  Attendance.create(attendance, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the attendance."
      });
    else res.send(data);
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