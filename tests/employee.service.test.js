const expect = require('chai').expect;
const employeeService = require('../services/employee.service');

describe('#employee.service', () => {
   
      it('addEmployee', async () => {
         const userObject = {
            id: parseInt(Math.random()*1000),
            name: 'rayna',
            email: 'rayna@gmail.com',
            mobile_number: 123456,
            joining_date: '2018-11-11',
            role: 'admin'
         }
         const output = "insert into employee values ('101','rayna','rayna@gmail.com', 123456,'2018-11-11', 'admin')";
         const result = await employeeService.addEmployee(userObject);
         expect(2).to.be.eql(result.length);
      })
  
    
       it('employeeSearch', async ()=>{
         const userObject ={
            searchText: "B",
            columnName: "name"
         }
         const output = "select * from employee where name like '%B%'";
         const result = await employeeService.employeeSearch(userObject);
         expect(result).to.be.an('array');
      })
   
   
      it('listEmployee', async ()=>{
         const userObject ={
            "pageNumber": 1,
            "limit":6
         }
         const outputs = [
            {
              id: 8,
              name: 'mia',
              email: 'mia@gmail.com',
              mobile_number: 89003,
              joining_date: '2018-01-01',
              role: 'user'
            }
          ]
          
         const output = "select * from employee limit 1 offset 6";
         const result = await employeeService.listEmployee(userObject);
         console.log("result", result)
         expect(result[0]['id']).to.eql(8); 
       })
    
});