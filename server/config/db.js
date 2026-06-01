const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  uri: process.env.MYSQL_URL,
  waitForConnections: true,
  connectionLimit: 10,
});

console.log("✅ MySQL Pool Created");

module.exports = pool;