const expect = require('chai').expect;
const employeeService = require('../services/employee.service');

describe('#employee.service', ()=>{
  context('addEmployee', ()=>{
     it('test case 1: addEmployee', () =>{
        const userObject={
            id: 100,
            name: 'rayna',
            email: 'rayna@gmail.com',
           mobile_number: 123456,
           joining_date: '2018-11-11',
            role: 'admin'
         }
         const output = "insert into employee values ('100','rayna','rayna@gmail.com', 123456,'2018-11-11', 'admin')";
        employeeService.addEmployee(userObject).then(res=>expect(output).to.equal(res, "test case 1"));
         
     })
  })
  context('employeeSearch', ()=>{
    it('test case 2: employeeSearch', ()=>{
      const userObject ={
         searchText: "B",
         columnName: "name"
      }
      const output = "select * from employee where name like '%B%'";
      employeeService.employeeSearch(userObject).then(res=> expect(output).to.equal(res, "test case 2"));
    })
  })
  context('listEmployee', ()=>{
   it('test case 3: listEmployee', ()=>{
      const userObject ={
         "pageNumber": 1,
         "limit":6
      }
      const output = "select * from employee limit 1 offset 6";
      employeeService.listEmployee(userObject).then(res=> expect(output).to.equal(res, "test case 3"));
    })
  })
});