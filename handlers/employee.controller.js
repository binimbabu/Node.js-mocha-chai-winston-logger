const employee = require("../services/employee.service");
const logger = require('../logger/logger');

exports.employeeList = async (req, res) => {
  try{
    let empObject = {
      pageNumber: req.body.pageNumber | 1,
      limit:req.body.limit | 6
    };
     const output = await employee.listEmployee(empObject);
     logger.info("Successfully listed");
     return res.send({status:200,  message: "Successful", data:output});
    
  }catch(error){
    logger.error("Error in retrieving employee listing");
    res.send({status:500, message:"Error in retrieving employee listing"});
   
  }
  
}




exports.employeeSearch = async (req, res) => {
  try{
    let empObject = {
      searchText : req.body.searchText,
      columnName: req.body.columnName
    };
  
    const output = await employee.employeeSearch(empObject);
    logger.info("Successfully searched");
    return res.send({status:200,  message: "Successful", data:output});
  }
  catch(error){
    logger.error("Error in employee search");
    res.send({status:500, message:"Error in employee search"});
  }
 
}



exports.employeeCreate = async (req, res) => {
  try{
    let empObject = {
      id:req.body.id,
      name : req.body.name,
      email: req.body.email,
      mobile_number: req.body.mobile_number,
      joining_date: req.body.joining_date,
      role: req.body.role
    }
    const output = await employee.addEmployee(empObject);
    logger.info("Successfully created " + " " + empObject.id);
    return res.send({status:200,  message: "Successful", data:output});
  }
  catch(error){
    logger.error("Error in creating employee");
    res.send({status:500, message:"Error in creating employee" });
  }
  



}