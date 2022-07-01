const Employee = require("../services/employee.services");
const empService = require("../services/userService");


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






exports.employeeList = async (req, res) => {
  return new Promise((resolve, reject)=>{
  let empObject = {
    pageNumber: req.body.pageNumber,
    limit:req.body.limit
  };
  
  empService.listEmployee(empObject, function (err, data) {
      if (data) {
          let response = {};
          response.employeedata = data
          res.send(response);
          resolve(response);
      } else {
          let errorResp = {
              message: 'Error'
          };
          reject(errorResp);
          res.send(errorResp)
      }
  })
  // res.send(response);
});
}




exports.employeeSearch = (req, res) => {
  let empObject = {
    searchText : req.body.searchText,
    columnName: req.body.columnName
  }

  empService.searchEmployee(empObject, function (err, data) {
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



exports.employeeCreate = async (req, res) => {
  let empObject = {
    id:req.body.id,
    name : req.body.name,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    joining_date: req.body.joining_date,
    role: req.body.role
  }
    empService.createEmployee(empObject, function (err, data) {
      if (data) {
        let response = {};
        response.employeedata = data;
        res.status(200).send({
          message:
            "Employee created successfully"});
      } else {
          let errorResp = {
              message: 'Error'
          };
          res.send(errorResp)
      }
  });


}