const sql = require("../sqlClient");
// constructor
const Employee = function(employee) {
  this.name = employee.name;
  this.email = employee.email;
  this.mobile_number = employee.mobile_number;
  this.joining_date = employee.joining_date;
  this.role = employee.role;
};
Employee.create = (newEmployee, result) => {
  sql.query("INSERT INTO employee SET ?", newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newEmployee });
    result(null, { id: res.insertId, ...newEmployee });
  });
};
Employee.findById = (id, result) => {
  sql.query(`SELECT * FROM employee WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};
Employee.getAll = (id, result) => {
  let query = "SELECT * FROM employee";
 
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("employees: ", res);
    result(null, res);
  });
};







// Tutorial.getAllPublished = result => {
//   sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };
// Tutorial.updateById = (id, tutorial, result) => {
//   sql.query(
//     "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
//     [tutorial.title, tutorial.description, tutorial.published, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
//       console.log("updated tutorial: ", { id: id, ...tutorial });
//       result(null, { id: id, ...tutorial });
//     }
//   );
// };
// Tutorial.remove = (id, result) => {
//   sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     if (res.affectedRows == 0) {
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }
//     console.log("deleted tutorial with id: ", id);
//     result(null, res);
//   });
// };
// Tutorial.removeAll = result => {
//   sql.query("DELETE FROM tutorials", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };
module.exports = Employee;