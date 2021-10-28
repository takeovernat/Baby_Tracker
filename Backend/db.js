
const dbconfig = {
  HOST: "172.20.12.197",
  USER: "root",
  PASSWORD: "password",
  DB: "babytracker"
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