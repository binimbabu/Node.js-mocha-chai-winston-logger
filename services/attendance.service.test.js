const expect = require('chai').expect;
const attendanceService = require('../services/attendance.service');

describe('#eattendance.service', ()=>{
  context('create', ()=>{
     it('test case 4: create', () =>{
        const userObject={
            id: 13,
            presentDate: "2018-11-11",
            present: 1,
         }
         const output = "insert into attendance(id,presentDate,present) values(13, '2018-11-11', 1)";
         attendanceService.create(userObject).then(res=>expect(output).to.equal(res, "test case 4"));
         
     })
  })
  context('listAllEmpAttendence', ()=>{
    it('test case 5: listAllEmpAttendence', ()=>{
      const userObject ={
        presentDate: "2018-11-11"
      }
      const output = "select * from attendance where presentDate= '2018-11-11'";
      attendanceService.listAllEmpAttendence(userObject).then(res=> expect(output).to.equal(res, "test case 5"));
    })
  })
  context('viewEmpAttendence', ()=>{
   it('test case 6: viewEmpAttendence', ()=>{
      const userObject ={
        "id" :1, 
        "limit" : 1,
        "offset":0
      }
      const output = "select * from attendance where id = 1 limit 1 offset 0";
      attendanceService.viewEmpAttendence(userObject).then(res=> expect(output).to.equal(res, "test case 6"));
    })
  })
});