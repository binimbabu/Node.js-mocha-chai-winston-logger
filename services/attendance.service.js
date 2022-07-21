const sqlService = require('./sqlService');
const logger = require('../logger/logger');
const CustomError = require('../errors/error');

module.exports.create = async (params) => {
  try {
    let query = `insert into attendance(id,presentDate,present) values(${params.id}, '${params.presentDate}', ${params.present})`;

    const result = await sqlService.executeQuery(query);
    return result;
  }
  catch (error) {
    logger.error("Connection to database failed");
    throw new CustomError("Id and present date must be present");
  }
};


module.exports.listAllEmpAttendence = async (params) => {
  try {
    let query = ` select * from attendance where presentDate= '${params.presentDate}'`;
    logger.info("Query result")
    const result = await sqlService.executeQueryList(query);
    return result;
  }
  catch (error) {
    logger.error("Connection to database failed", error.message);
  
  }
}
module.exports.viewEmpAttendence = async (empData) => {
  try {
    let query = `select * from attendance where id = ${empData.id}
    limit ${empData.limit} offset ${empData.offset}`;
    const result = await sqlService.executeQueryView(query);
    return result;
  }
  catch (error) {
    logger.error(error.message + " with id" + empData.id);
  }
}
