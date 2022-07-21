const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const logger = require('../logger/logger');

module.exports.executeQuery = async (query) => {
  try {


    const result = await dbModels.sequelize.query(query, { type: dbModels.sequelize.QueryTypes.INSERT })
    return result;
  }
  catch (error) {
    logger.error("Failed to get details from db", error.message);
    throw new CustomError("Id and present date must be present");
  }
};


module.exports.executeQueryList = async (query) => {
  try {


    const result = await sql.sequelize.query(query,
      {
        type: dbModels.sequelize.QueryTypes.SELECT
      })
    logger.info(result, "result")
    return result;
  }
  catch (error) {
    logger.error("Failed to get details from db", error.message);
    throw new CustomError("Present date must be present");
  }
};


module.exports.executeQueryView = async (query) => {
  try {
    const result = await sql.sequelize.query(query,
      { type: sql.sequelize.QueryTypes.SELECT });
      return result;
   }
     catch(error){
       logger.error("Failed to get details from db" + error.message   + " with id" +empData.id );
     }
    }


    module.exports.executeQueryCreateEmployee = async (query) => {
      try {
        const result = await dbModels.sequelize.query(query,
          { type: dbModels.sequelize.QueryTypes.INSERT })
          return result;
    }
    
        catch(err){
          logger.error("Failed to get details from db ");
          throw new CustomError("Id and email must be unique");
        
        }
      }

      module.exports.executeQueryEmployeeSearch = async (query) => {
        try {
          let result = await dbModels.sequelize.query(query,
            {
                type: dbModels.sequelize.QueryTypes.SELECT
            })
            return result;
      }
      catch(error){
        logger.error("Failed to get details from db", error.message);
      }
    }

    module.exports.executeQuerylistEmployee = async (query) => {
      try {
        const result = await sql.sequelize.query(query,
          { type: dbModels.sequelize.QueryTypes.SELECT })
          
          return result;
           }
           catch(error){
            logger.error("Failed to get details from db", error.message);
          }
        }