const Employee = require("../services/employee.services");


exports.employeeList =  (req, res) => {
  try{
    let empObject = {
      pageNumber: req.body.pageNumber,
      limit:req.body.limit
    };
     const output = Employee.listEmployee(empObject);
     output.then((value)=>{
       res.send({status:200, message:"Successfully retrieved values", data:value});
     }) 
    
  }catch(error){
    res.send({status:500, message:"Error in retrieving employee listing"});
  }
  
}




exports.employeeSearch = (req, res) => {
  try{
    let empObject = {
      searchText : req.body.searchText,
      columnName: req.body.columnName
    };
  
    const output = Employee.employeeSearch(empObject);
    output.then((value)=>{
      res.send({status:200, message:"Employee search successful", data:value});
    })
  }
  catch(error){
    res.send({status:500, message:"Error in employee search"});
  }
 
}



exports.employeeCreate =  (req, res) => {
  try{
    let empObject = {
      id:req.body.id,
      name : req.body.name,
      email: req.body.email,
      mobile_number: req.body.mobile_number,
      joining_date: req.body.joining_date,
      role: req.body.role
    }
    const output = Employee.addEmployee(empObject);
    output.then((value)=>{
      res.send({status:200, message:"Success created employee",data: value });
    })
  }
  catch(error){
    res.send({status:500, message:"Error in creating employee" });
  }
  



}