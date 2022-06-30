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

exports.findAll = (req, res) => {
  return new Promise((resolve, reject)=>{
  const name = req.query.name;
  Employee.getAll(name, (err, data) => {
    if (err){
      reject(res);
    }
      
    else {
      resolve(res);
      res.send(data);
    }
  });
});
};

exports.findOne = (req, res) => {
  return new Promise((resolve, reject)=>{
  Employee.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        reject(res);
        
      } else {
        reject(res);
        
      }
    } else {
      resolve(res);
      
    }
  });
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
 
  let empObject = {
    pageNumber: req.body.pageNumber,
    limit:req.body.limit
  };
  
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


exports.searchEmployee =  (empData,callback)=>{
  return new Promise((resolve, reject)=>{
  Employee.employeeSearch(empData,function(err,data){
      if(err)
      {
        reject(err);
        callback(err,null);
      }
          
      else{
       callback(null,data)
       resolve(null,data);
      }
          
  });
});
  
}

exports.employeeSearch = (req, res) => {
  let empObject = {
    searchText : req.body.searchText,
    columnName: req.body.columnName
  }
  // let response =  
  this.searchEmployee(empObject, function (err, data) {
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



