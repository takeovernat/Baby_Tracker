const sql = require('../db');

const Admin = function(admin){
    this.id = admin.id;
    this.name = admin.name;
    this.username = admin.username;
    this.child_id = admin.child_id;
}

Admin.create = (newAdmin, result) => {
    sql.query("INSERT INTO Admin SET ?", newAdmin, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Admin: ", { id: res.id, ...newAdmin });
    result(null, { id: res.id, ...newAdmin });
  });
};

Admin.findById = (id, result) => {
    sql.query(`SELECT * FROM Admin WHERE id = ${id}`, (err, res) => {
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

  Admin.remove = (id, result) => {
    sql.query("DELETE FROM Admin WHERE id = ?", id, (err, res) => {
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
  
      console.log("deleted Admin with id: ", id);
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


  Admin.updateById = (id, Admin, result) => {
    sql.query(
      "UPDATE Admin SET email = ?, name = ?, active = ? WHERE id = ?",
      [Admin.name, Admin.username],
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
  
        console.log("updated Admin: ", { id: id, ...Admin });
        result(null, { id: id, ...Admin });
      }
    );
  };
  

module.exports = Admin;

