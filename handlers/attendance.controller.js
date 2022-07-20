
const attendance = require("../services/attendance.service");

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
    logger.error("Error in creating",error.message);
    return res.status(error.statusCode).send({success: false, message: error.message});
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
  logger.error("Error in listing attendance of all employees",error.message);
  return res.status(error.statusCode).send({success: false, message: error.message});
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
    logger.error("Error listing attendance details of an employee", error.message);
    return res.status(error.statusCode).send({success: false, message: error.message});
    }
  
}