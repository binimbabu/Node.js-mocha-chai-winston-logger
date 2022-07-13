const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;




module.exports.addEmployee = async (empData) => {
  try{
    let query = `insert into employee 
    values 
    ('${empData.id}',
    '${empData.name}',
        '${empData.email}',
        '${empData.mobile_number}',
        '${empData.joining_date}',
        '${empData.role}')`;
    const result = await dbModels.sequelize.query(query,
        { type: dbModels.sequelize.QueryTypes.INSERT })
        return result;
  }
  
      catch(err){
        logger.error("Error in inserting employee with id" + " " +empData.id );
        
      }
}

module.exports.employeeSearch = async (empData) => {
  try{
    let query = ` select * from employee where ${empData.columnName} like '%${empData.searchText}%'`;
    let result = await dbModels.sequelize.query(query,
        {
            type: dbModels.sequelize.QueryTypes.SELECT
        })
        return result;
  }
  catch(error){
    logger.error("Error in searching employee");
  }
}


module.exports.listEmployeeCount= async (doc) => {
  try{
    let query = ` 
    select count(*) from employee  
    limit 6
    offset 1
`;
const result = await dbModels.sequelize.query(query,
{ type: dbModels.sequelize.QueryTypes.SELECT })
return result;
  }
  catch(error){
    logger.error("Error in listing employee");
  }
}

module.exports.listEmployee= async (doc) => {
 try{
  let query = ` 
  select * from employee 
  limit ${doc.pageNumber}
  offset ${doc.limit}
`;
const result = await sql.sequelize.query(query,
{ type: dbModels.sequelize.QueryTypes.SELECT })

return result;
 }
 catch(error){
  logger.error("Error in listing employee");
}
 
}


