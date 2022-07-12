
const attendance = require("../services/attendance.services");

const logger = require('../logger/logger');



exports.create = async (req, res) => {
  try{
   let empObject = {
     id: req.body.id,
     presentDate: req.body.presentDate,
     present: req.body.present,
   };
   const output = await attendance.create(empObject);
   logger.info("Successfully created" + " " + empObject.id);
   return res.send({status:200,  message: "Successful", data:output});
   
  }
   catch(error){
    logger.error("Error in creating attendance");
    return res.send({
      status: 500,
      message: "Error in marking attendance of an employee"
    })
   }
  
   
 }




exports.employeeListAttendence = async (req, res) => {
try{
  let empObject = {
    presentDate: req.body.presentDate,

  };
  const output = await attendance.listAllEmpAttendence(empObject);
  logger.info("Successfully listing attendance of all employees");
   return res.send({status:200, message: "Successful listing attendance of all employees",  data:output});

 
}
catch(error){
  logger.error("Error in listing attendance of all employees");
  return res.send({status:500, message:"Error in listing attendance of all employees"})
}
 

 

}


exports.employeeViewAttendence = async (req, res) => {
  try{
    let empObject = {
      id: req.body.id,
      offset: req.body.offset,
      limit: req.body.limit
    };
    const output = await attendance.viewEmpAttendence(empObject);
    logger.info("Successfully listing attendance details of an employee");
    return res.send({status:200, message: "Successful listing attendance details of an employee", data:output});

  }
  catch(error){
    logger.error("Error listing attendance details of an employee");
    return res.send({status:500, message:"Error listing attendance details of an employee"});
    }
  
}