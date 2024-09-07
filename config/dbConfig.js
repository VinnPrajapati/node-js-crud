const mysql = require("mysql");
require("dotenv").config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSW,
  database: process.env.DB_NAME,
});

conn.connect((err) => {
  if (err) {
    console.log("Not Connected");
  } else {
    console.log("Connected");
  }
});

module.exports = conn;
