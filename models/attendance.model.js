const sql = require("./db.js");
// constructor
const Attendance = function(attendance) {
  this.empId = attendance.empId;
  this.present_Date = attendance.present_Date;
  this.present = attendance.present;
};
Attendance.create = (newAttendance, result) => {
  sql.query("INSERT INTO attendance SET ?", newAttendance, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newAttendance });
    result(null, { id: res.insertId, ...newAttendance });
  });
};