const sql = require('../db');

const Admin = function(admin){
    this.first_name = admin.first_name;
    this.last_name = admin.last_name;
    this.username = admin.username;
    this.password = admin.password;
    this.email = admin.email;
    this.age = admin.age;
    this.children=admin.children;
 
}

Admin.create = (newAdmin, result) => {
    sql.query("INSERT INTO Admin SET ?", newAdmin, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Admin: ", { id: res.username, ...newAdmin });
    result(null, { id: res.username, ...newAdmin });
  });
};

Admin.findByUsername = (username, result) => {
    sql.query(`SELECT * FROM Admin WHERE username = ${username}`, (err, res) => {
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

  Admin.getAll = result => {
    sql.query("SELECT * FROM Admin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Admins: ", res);
      result(null, res);
    });
  };

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


  Admin.updateByUsername = (username, Admin, result) => {
    sql.query(
      "UPDATE Admin SET email = ?, password = ? WHERE id = ?",
      [Admin.email, Admin.password],
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

