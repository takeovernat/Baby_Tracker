const sql = require('../db');

const Child = function(child){
    this.id = child.id;
    this.admin_id = child.admin_id;
    this.age = child.age;
    this.height = child.height;
    this.weight = child.weight;
    this.diet_id = child.diet_id;
}

Child.create = (newchild, result) => {
    sql.query("INSERT INTO Child SET ?", newchild, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Child: ", { id: res.id, ...newchild });
    result(null, { id: res.id, ...newchild });
  });
};

Child.findById = (id, result) => {
    sql.query(`SELECT * FROM Child WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Child: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  Child.getAll = result => {
    sql.query("SELECT * FROM child", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Childs: ", res);
      result(null, res);
    });
  };

module.exports = Child;

