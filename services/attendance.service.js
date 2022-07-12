const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;


module.exports.create = async (params)=>{
try{
  let query = `insert into attendance(id,presentDate,present) values(${params.id}, '${params.presentDate}', ${params.present})`;
  const result = await dbModels.sequelize.query(query, {type: dbModels.sequelize.QueryTypes.INSERT})
  return result;
}
   catch(error){
    logger.error("Error in retrieving attendance with present date" + params.presentDate);
   }
  };


module.exports.listAllEmpAttendence = async(params) => {
 try{
  let query = ` select * from attendance where presentDate= '${params.presentDate}'`;
  const result = await sql.sequelize.query(query,
    {
      type: dbModels.sequelize.QueryTypes.SELECT
    })
    
    return result;
  }
    catch(error){
      logger.error("Error in retrieving attendance with present date" + params.presentDate);
    }
  }
module.exports.viewEmpAttendence =  async (empData) =>  {
  try{
    let query = `select * from attendance where id = ${empData.id}
    limit ${empData.limit} offset ${empData.offset}`;
   const result = await sql.sequelize.query(query,
     { type: sql.sequelize.QueryTypes.SELECT });
     return result;
  }
    catch(error){
      logger.error("Error in retrieving attendance with id" + " " +empData.id );
    }
  }
