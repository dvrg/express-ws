const { DataTypes } = require('sequelize')
var conn = require('../connection')

const Users = conn.define('Users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Users;