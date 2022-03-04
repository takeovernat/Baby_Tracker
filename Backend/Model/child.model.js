const sql = require('../db');

const Child = function(child){
    
    this.admin_username = child.admin_username;
    this.first_name = child.first_name;
    this.last_name = child.last_name;
    this.age_months = child.age_months;
    this.gender = child.gender;
  
}


Child.create = (newchild, result) => {
    sql.query("INSERT INTO Child SET ?", newchild, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Child: ", { child_id: res.child_id, ...newchild });
    result(null, { child_id: res.child_id, ...newchild });
  });
};
//Testing create function
// const testchild = {
//   "admin_username":"nate",
//   "first_name": "jj",
//   "last_name": "robers",
//   "age_months" : 1 
// }

// Child.create(testchild)

Child.findById = (child_id, result) => {
    sql.query(`SELECT * FROM Child WHERE child_id = ${child_id}`, (err, res) => {
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

Child.findbyAdmin = (admin_username, result) =>{
  sql.query(`SELECT * FROM Child WHERE admin_username = "${admin_username}"`,(err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err,null);
      return;
    }


    if(res.length){
      console.log("found Child/s: ", res);
      result(null, res);
      return;
    }
    result({kind: "not_found"}, null);
  
  });


}

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

