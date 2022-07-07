const Attendance = require("../services/attendance.services.js");

// exports.create = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   const attendance = new Attendance({
//     id: req.body.id,
//     present_Date: req.body.present_Date,
//     present: req.body.present,
//   });
//   // Save Tutorial in the database
//   Attendance.create(attendance, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Attendance."
//       });
//     else {
//       console.log("successful");
//       res.status(200).send({
//         message:
//           "creating the Attendance."
//       });
//       // res.send(data);
//     }
//   });
// };

// exports.create =  (req, res) => {
//   let empObject = {
//     id: req.body.id,
//     present_Date: req.body.present_Date,
//     present: req.body.present,
//   }
//    Attendance.create(empObject, function (err, data) {
//     if (data) {
//       let response = {};
//       response.employeedata = data;

//     } else {
//       let errorResp = {
//         message: 'Error'
//       };
//       res.send(errorResp)
//     }
//   });
// }











exports.create = async (req, res) => {
  let empObject = {
    id: req.body.id,
    present_Date: req.body.present_Date,
    present: req.body.present,
  };
  Attendance.create(empObject, function (err, data) {
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
    Attendance.listAllEmpAttendence(empData, function (err, data) {
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
    Attendance.viewEmpAttendence(empData, function (err, data) {
      if (err) {
        callback(err, null);
        reject(err);
      }

      else {
        callback(null, data);
        resolve(data);
      }

    });
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