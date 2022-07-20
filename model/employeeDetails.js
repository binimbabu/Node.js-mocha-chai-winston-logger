const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('employeedetails', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        mobile_number: {
            type: DataTypes.STRING
        },
        joining_date: {
            type: DataTypes.DATE
        },
        role: {
            type: DataTypes.STRING
        },

    }, {
        tableName: "employee",
        timestamps: false
    });
};