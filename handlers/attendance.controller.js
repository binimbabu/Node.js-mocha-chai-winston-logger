
const attendance = require("../services/attendance.service");

const logger = require('../logger/logger');

const moment = require('moment');
const CustomError = require("../errors/error");

exports.create = async (req, res) => {
  try {
    let empObject = {
      id: req.body.id,
      presentDate: req.body.presentDate,
      present: req.body.present,
    };
    const output = await attendance.create(empObject);
    if (output) {
      logger.info("Successfully created" + " " + empObject.id);
      return res.send({ status: 200, message: "Successful" });
    }
    else {
      if(error instanceof CustomError) {
        return res.status(400).send({ success: false, message: error.message });
      }
      return res.status(400).send({ success: false, message: "Present Date and id mandatory" });
    }

  }
  catch (error) {
    logger.error("Error in creating", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });
  }


}




exports.employeeListAttendence = async (req, res) => {
  try {
    moment(req.body.presentDate).format('MMMM d, YYYY');
    if (moment(req.body.presentDate).format('MMMM d, YYYY')) {
      let empObject = {
        presentDate: req.body.presentDate,

      };
      const output = await attendance.listAllEmpAttendence(empObject);
      if (output) {
        console.log("output", output)
        logger.info("Successfully listing attendance of all employees");
        return res.send({ status: 200, message: "Successful listing attendance of all employees", data: output });
      }
      else {
        return res.status(400).send({ success: false, message: "Should be date format yyyy-mm-dd" });
      }

    }
    else {
      logger.error("Error in date format", error.message);
      return res.status(error.statusCode).send({ success: false, message: error.message });
    }
  }
  catch (error) {
    logger.error("Error in listing attendance of all employees", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });
  }




}


exports.employeeViewAttendence = async (req, res) => {
  try {
    let empObject = {
      id: req.body.id,
      offset: req.body.offset,
      limit: req.body.limit
    };
    const output = await attendance.viewEmpAttendence(empObject);
    logger.info("Successfully listing attendance details of an employee");
    return res.send({ status: 200, message: "Successful listing attendance details of an employee", data: output });

  }
  catch (error) {
    logger.error("Error listing attendance details of an employee", error.message);
    return res.status(error.statusCode).send({ success: false, message: error.message });
  }

}