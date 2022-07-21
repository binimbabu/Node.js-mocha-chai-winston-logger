const employee = require("../services/employee.service");
const logger = require('../logger/logger');

var validator = require("email-validator");
const CustomError = require("../errors/error");


exports.employeeList = async (req, res) => {
  try {
    let empObject = {
      pageNumber: req.body.pageNumber | 1,
      limit: req.body.limit | 1
    };
    const output = await employee.listEmployee(empObject);
    logger.info("Successfully listed");
    return res.send({ status: 200, message: "Successful", data: output });

  }
  catch (error) {
    
    logger.error("Error listing", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });

  }

}




exports.employeeSearch = async (req, res) => {
  try {
    let empObject = {
      searchText: req.body.searchText,
      columnName: req.body.columnName
    };

    const output = await employee.employeeSearch(empObject);
    logger.info("Successfully searched");
    return res.send({ status: 200, message: "Successful" , data: output});
  }
  catch (error) {
    logger.error("Search failed", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });
  }

}



exports.employeeCreate  = async (req, res) => {
  try {
    if (validator.validate(req.body.email)) {
      let empObject = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        joining_date: req.body.joining_date,
        role: req.body.role
      }
      const output = await employee.addEmployee(empObject);
      logger.info("Successfully created ");
        return res.send({ status: 200, message: "Successful", data: output });
      
      
    }
    else {
      return res.status(400).send({ success: false, message: "email isnt valid" });
    }
  }

  catch (error) {
    if(error instanceof CustomError) {
      return res.status(400).send({ success: false, message: error.message });
    }
    logger.error("Error in creating", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });
  }




}