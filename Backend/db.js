
const dbconfig = {
  HOST: "sql3.freemysqlhosting.net",
  USER: "sql3471944",
  PASSWORD: "z7gMceaE6a",
  DB: "sql3471944"
}

const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: dbconfig.USER,
    host: dbconfig.HOST,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = db;
