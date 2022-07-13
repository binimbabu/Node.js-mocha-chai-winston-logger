const expect = require('chai').expect;
const attendanceService = require('../services/attendance.service');

describe('#attendance.service', () => {
  context('create', () => {
    it('create', async() => {
      const userObject = {
        id: 13,
        presentDate: "2018-11-11",
        present: 1,
      }
    

      const output = "insert into attendance(id,presentDate,present) values(13, '2018-11-11', 1)";
      let result = await attendanceService.create(userObject);
      
     expect(2).to.be.an('array');  

    })
  })
  
  
  
    it('listAllEmpAttendence', async () => {
      const userObject = {
        presentDate: "2018-11-11"
      }
      const output = "select * from attendance where presentDate= '2018-11-11'";
      console.log("before")
      const result = await attendanceService.listAllEmpAttendence(userObject);
      expect(result).to.be.an('array');    
    })
  

    it('viewEmpAttendence',async () => {
      const userObject = {
        "id": 1,
        "limit": 1,
        "offset": 0
      }
      const output = "select * from attendance where id = 1 limit 1 offset 0";
      const result =  await attendanceService.viewEmpAttendence(userObject);
      console.log(result, "result")
      expect(result[0]['atId']).to.eql(1); 
    })
 
});