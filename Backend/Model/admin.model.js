const sql = require('../db');

const Hashes = require('jshashes')


//var MD5 = new Hashes.MD5
//import md5 from 'md5'
var MD5 = require("crypto-js/md5");
//console.log(MD5("123456").toString());

const Admin = function(admin){
    this.first_name = admin.first_name;
    this.last_name = admin.last_name;
    this.username = admin.username;
    this.password = admin.password;
    this.email = admin.email;
    this.age = admin.age;
    this.children=admin.children;
 
}

//onsole.log(MD5("123321").toString())
Admin.create = (newAdmin, result) => {
    sql.query("INSERT INTO Admin SET ?", newAdmin, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Admin: ", { username: res.username, ...newAdmin });
    result(null, { username: res.username, ...newAdmin });
  });
};


//just a couple more questions, when is your date of birth, how many children do you have? 
//do you have a new born or fetus etc...
//test for admin create
// const TestAdmin ={
//   "first_name" : "Ron",
//   "last_name" : "Harris",
//     "username" : "ron",
//     "password" : "$2a$10$KssILxWNR6k62B7yiX0GAe2Q7wwHlrzhF3LqtVvpyvHZf0MwvNfVu",
//     "email" : "hoopindreams35@gmail.com",
//     "age" : 44,
//     "children" : 26,

 
// }
// Admin.create(TestAdmin)
//finds admin by username 
Admin.findByUsername = (username, result) => {
    sql.query(`SELECT * FROM Admin WHERE username = "${username}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Admin: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  //gets all admins
  Admin.getAll = result => {
    sql.query("SELECT * FROM Admin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      result(null, res);
    });
  };

  //removed admin by username
  Admin.remove = (username, result) => {
    sql.query("DELETE FROM Admin WHERE username = ?", username, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Admin with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted Admin with username: ", username);
      result(null, res);
    });
  };
//remove all admins
  Admin.removeAll = result =>{
      sql.query("DELETE FROM Admin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
  }
  console.log(`deleted ${res.affectedRows} Admins`);
    result(null, res);
  });
};

//update admin by username
  Admin.updateByUsername = (username, Admin, result) => {
    sql.query(
      "UPDATE Admin SET age = ?, children = ? WHERE username = ?",
      [Admin.age, Admin.children, username],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found admin with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated Admin: ", { username: username, ...Admin });
        result(null, { username: username, ...Admin });
      }
    );
  };
  

module.exports = Admin;

