const { Sequelize } = require('sequelize');
const seq = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

try {
    seq.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

seq.sync({ alter: true });

module.exports = seq;