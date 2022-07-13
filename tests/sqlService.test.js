const expect = require('chai').expect;
const sqlService = require('../services/sqlService');

describe('#attendance.service', () => {
it('executeQueryList', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQueryList(output);
    expect(result).to.be.an('array'); 
    
  
  })

  it('executeQuery', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQuery(output);
    expect(result).to.be.an('array'); 
    
  
  })

  it('executeQueryView', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQueryView(output);
    expect(result[0]['atId']).to.eql(1); 
    
  
  })


  it('executeQueryCreateEmployee', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQueryCreateEmployee(output);
    expect(result).to.be.an('array'); 
    
  
  })


  it('executeQuerylistEmployee', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQuerylistEmployee(output);
    expect(result).to.be.an('array'); 
    
  
  })


  it('executeQueryEmployeeSearch', async () => {
    
    const output = "select * from attendance where presentDate= '2018-11-11'";
  
    const result = await sqlService.executeQueryEmployeeSearch(output);
    expect(result).to.be.an('array'); 
    
  
  })
});