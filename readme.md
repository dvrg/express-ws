#### Initial project
```bash
$ npm i --save express-generator
```

#### Create project
```bash
$ express myApp
```

#### Install squelize
```bash
$ npm i --save sequalize
$ npm i --save sqlite
```

#### Create connection
```javascript
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
```

#### Create models
```javascript
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
```

#### Create routes
create file news.js inside routes folder
```javascript

```

#### Running server
```bash
$ DEBUG=mywsapp:* npm start
```