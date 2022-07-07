const sql = require("../sqlClient");
const { QueryTypes } = require('sequelize');
var dbModels = require('../sqlClient');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { query } = require('express')


const Attendance = function (attendance) {
  this.id = attendance.id;
  this.present_Date = attendance.present_Date;
  this.present = attendance.present;
};



module.exports.create = async (params, callback)=>{

   
    let query = `insert into attendance(id,presentDate,present) values(${params.id}, '${params.presentDate}', ${params.present})`;
    
    const result = await dbModels.sequelize.query(query, {type: dbModels.sequelize.QueryTypes.INSERT})
   return result;
    
   
   
  };


module.exports.listAllEmpAttendence = async(params, callback) => {
  // esClient.create
  let query = ` select * from attendance where presentDate= '${params.presentDate}'`;
  const result = await sql.sequelize.query(query,
    {
      type: dbModels.sequelize.QueryTypes.SELECT
    })
    
    return result;
  }
module.exports.viewEmpAttendence =  async (empData, callback) =>  {
  let query = `select * from attendance where id = ${empData.id}
   limit ${empData.limit} offset ${empData.offset}`;
  const result = await sql.sequelize.query(query,
    { type: sql.sequelize.QueryTypes.SELECT });
    return result;
  }
