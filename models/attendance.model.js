const sql = require("../sqlClient.js");

const Attendance = function(attendance) {
  this.id = attendance.id;
  this.present_Date = attendance.present_Date;
  this.present = attendance.present;
};
Attendance.create = (newattendance, result) => {
  sql.query("INSERT INTO attendance SET ?", newattendance, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created attendance: ", { id: res.insertId, ...newattendance });
    result(null, { id: res.insertId, ...newattendance });
  });
};
 

module.exports = Attendance;