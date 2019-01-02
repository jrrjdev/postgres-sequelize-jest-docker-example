const fs = require('fs');

module.exports = {
  development: {
    username: 'postgres',
    password: 'pw',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'pw',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        // ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    }
  }
};
