const Attendance = require("../models/attendance.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const attendance = new Attendance({
    id: req.body.id,
    present_Date: req.body.present_Date,
    present: req.body.present,
  });
  // Save Tutorial in the database
  Attendance.create(attendance, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Attendance."
      });
    else res.send(data);
  });
};

exports.lisAllEmployeeAttendence =  (empData,callback)=>{
  Attendance.listAllEmpAttendence(empData,function(err,data){
      if(err)
          callback(err,null);
      else
          callback(null,data)
  });
  
}

exports.employeeListAttendence = (req, res) => {

    let empObject = {
      present_Date: req.body.present_Date,
    
    };
 
  this.lisAllEmployeeAttendence(empObject, function (err, data) {
      if (data) {
          let response = {};
          response.employeedata = data;
          res.send(response);
      } else {
          let errorResp = {
              message: 'Error'
          };
          res.send(errorResp)
      }
  })

}
exports.viewEmployeeAttendence =  (empData,callback)=>{
  Attendance.viewEmpAttendence(empData,function(err,data){
      if(err)
          callback(err,null);
      else
          callback(null,data)
  });
}

exports.employeeViewAttendence = (req, res) => {
  let empObject = {
    id:1,
    offset: req.body.offset,
    limit:req.body.limit
  };
 
  this.viewEmployeeAttendence(empObject, function (err, data) {
  
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

}