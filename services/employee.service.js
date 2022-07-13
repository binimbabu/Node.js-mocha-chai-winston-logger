
const logger = require('../logger/logger');
const sqlService = require('./sqlService'); 


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
    const result = await sqlService.executeQueryCreateEmployee(query);
        return result;
  }
  
      catch(err){
        logger.error(err.message  + " with id " +empData.id );
        
      }
}

module.exports.employeeSearch = async (empData) => {
  try{
    let query = ` select * from employee where ${empData.columnName} like '%${empData.searchText}%'`;
    let result = await sqlService.executeQueryEmployeeSearch(query);
        return result;
  }
  catch(error){
    logger.error(error.message);
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
    logger.error(error.message);
  }
}

module.exports.listEmployee= async (doc) => {
 try{
  let query = ` 
  select * from employee 
  limit ${doc.pageNumber}
  offset ${doc.limit}
`;
const result = await sqlService.executeQuerylistEmployee(query);

return result;
 }
 catch(error){
  logger.error(error.message);
}
 
}


