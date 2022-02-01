
const dbconfig = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "password",
  DB: "HealthyBaby"
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