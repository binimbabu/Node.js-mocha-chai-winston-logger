const Employee = require('./employee.services');

exports.listEmployee =  (empData,callback)=>{
    Employee.listEmployeeCount(empData,function(err,empCount){
      Employee.listEmployee(empData,function(error,empInfor){
            let result = [];
            result = result.concat(empCount,empInfor);
            if(error)
                callback(error,null)
            else   
                callback(null,result)
        });
    });
}


exports.searchEmployee =  (empData,callback)=>{
    return new Promise((resolve, reject)=>{
    Employee.employeeSearch(empData,function(err,data){
        if(err)
        {
          reject(err);
          callback(err,null);
        }
            
        else{
         callback(null,data)
         resolve(null,data);
        }
            
    });
  });
    
  }


  

exports.createEmployee =  (empData,callback)=>{
    Employee.addEmployee(empData,function(err,data){
        if(err)
            callback(err,null)
        else
            callback(null,data)
    });
}