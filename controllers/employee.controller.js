const Employee = require("../models/employee.model");

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

// exports.findAll = (req, res) => {
//   const name = req.query.name;
//   Employee.getAll(name, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Employee."
//       });
//     else res.send(data);
//   });
// };

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


exports.listEmployee =  (empData,callback)=>{
  Employee.listEmployeeCount(empData,function(err,empCount){
    Employee.listEmployee(empData,function(error,empInfor){
          let result = [];
          result = result.concat(empCount,empInfor);
          if(error)
              callback(error,null)
          else   
              callback(null,result)
      });
  });
  
}

exports.employeeList = async (req, res) => {
  //let empObject = req.body;
  let empObject = {
    pageNumber: req.body.pageNumber,
    limit:req.body.limit
  };
  // let response =  
  this.listEmployee(empObject, function (err, data) {
      if (data) {
          let response = {};
          response.employeedata = data
          res.send(response);
      } else {
          let errorResp = {
              message: 'Error'
          };
          res.send(errorResp)
      }
  })
  // res.send(response);

}





