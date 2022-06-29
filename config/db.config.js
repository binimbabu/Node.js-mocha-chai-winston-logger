module.exports = {
    host     : 'localhost',
    user     : 'factweavers',
    port     : '3306',
    password : 'Admin@123',
    database : 'my_db',
    dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  };