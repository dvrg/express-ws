const { DataTypes } = require('sequelize')
var conn = require("../connection")

const News = conn.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


module.exports = News;