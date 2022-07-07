// const Attendance = require("../services/attendance.services");
const attendance = require("../services/attendance.services");

exports.create = async (req, res) => {
  let empObject = {
    id: req.body.id,
    present_Date: req.body.present_Date,
    present: req.body.present,
  };
  attendance.create(empObject, function (err, data) {
      if (data) {
        let response = {};
        response.employeedata = data;
        res.status(200).send({
          message:
            "Attendance created successfully"});
      } else {
          let errorResp = {
              message: 'Error'
          };
          res.send(errorResp)
      }
  });


}






// exports.create =  (req, res) => {
//   try{
//    let empObject = {
//      id: req.body.id,
//      present_Date: req.body.present_Date,
//      present: req.body.present,
//    };
//    const output = Attendance.create(empObject);
//    return res.send({
//     status: 200,
//     message: "success",
//     data: output.data
//   });
//   }
//    catch(error){
//     return res.send({
//       status: 500,
//       message: error.message
//     })
//    }
  
   
//  }


exports.lisAllEmployeeAttendence = (empData, callback) => {
  return new Promise((resolve, reject) => {
    attendance.listAllEmpAttendence(empData, function (err, data) {
      if (err) {
        reject(err);
        callback(err, null);
      }

      else {
        resolve(data);
        callback(null, data)
      }

    });
  });
}

exports.employeeListAttendence = (req, res) => {

  let empObject = {
    present_Date: req.body.present_Date,

  };

  this.lisAllEmployeeAttendence(empObject, function (err, data) {
    if (data) {
      let response = {};
      response.employeedata = data;
      res.send(response);
      resolve(response);
    } else {
      let errorResp = {
        message: 'Error'
      };
      res.send(errorResp);
      reject(err);
    }
  })

}
exports.viewEmployeeAttendence = (empData, callback) => {
  return new Promise((resolve, reject) => {
    try{
      attendance.viewEmpAttendence(empData, function (err, data) {
        if (err) {
          callback(err, null);
          reject(err);
        }
  
        else {
          callback(null, data);
          resolve(data);
        }
      });
    }
    catch(error){
      console.log(error, "eror")
    }

    
  });
}

exports.employeeViewAttendence = (req, res) => {
  let empObject = {
    id: 1,
    offset: req.body.offset,
    limit: req.body.limit
  };
  return new Promise((resolve, reject) => {
    this.viewEmployeeAttendence(empObject, function (err, data) {

      if (data) {
        let response = {};
        response.employeedata = data
        res.send(response);
        resolve(response);
      } else {
        let errorResp = {
          message: 'Error'
        };
        res.send(errorResp)
        reject(errorResp);
      }
    })
  });
}