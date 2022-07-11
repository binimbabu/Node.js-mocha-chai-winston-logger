
const attendance = require("../services/attendance.services");





exports.create =  (req, res) => {
  try{
   let empObject = {
     id: req.body.id,
     presentDate: req.body.presentDate,
     present: req.body.present,
   };
   const output = attendance.create(empObject);
   output.then((value)=>{
    return res.send({
      status: 200,
      message: "Successfully marked attendance of an employee",
      data: value
    });
   })
   
  }
   catch(error){
    return res.send({
      status: 500,
      message: "Error in marking attendance of an employee"
    })
   }
  
   
 }




exports.employeeListAttendence =  (req, res) => {
try{
  let empObject = {
    presentDate: req.body.presentDate,

  };
  const output = attendance.listAllEmpAttendence(empObject);
  output.then(value => {
    return res.send({status:200, message:"successfully listed attendance", data:value});
  }).catch(err => {
    console.log(err);
  });
 
}
catch(error){
  return res.send({status:500, message:"Error in listing attendance of all employees"})
}
 

 

}


exports.employeeViewAttendence = (req, res) => {
  try{
    let empObject = {
      id: req.body.id,
      offset: req.body.offset,
      limit: req.body.limit
    };
    const output = attendance.viewEmpAttendence(empObject);
    output.then((value)=>{
      console.log(value, "value")
      return res.send({status:200, message:"Success listing attendance details of an employee", data:value})
    })

  }
  catch(error){
    return res.send({status:500, message:"Error listing attendance details of an employee"});
    }
  
}