var mysql = require('mysql');
var util = require('util');

require('dotenv').config();

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'gonzalo0912',
    database: 'bbdd'
});

pool.query = util.promisify(pool.query);

module.exports = pool;

// connectionLimit: 10,
// host: process.env.MYSQL_HOST,
// user: 'gonzalo',
// password: process.env.MYSQL_PASSWORD,
// database: process.env.MYSQL_DB_NAME