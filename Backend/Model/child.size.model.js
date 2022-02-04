const sql = require('../db');
//const Child_size = require('./child.size.model');

const Child_size = function(child){
    this.child_id = child.child_id;
    this.height = child.height;
    this.weight = child.weight;
    this.record = child.record;

}

Child_size.create = (newchild_size, result) => {
    sql.query("INSERT INTO Child_size_tracker SET ?", newchild_size, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Child size data: ", { child_id: res.child_id, ...newchild_size });
    result(null, { child_id: res.child_id, ...newchild_size});
  });
};
//test create function
// const child_s = {
//   "child_id" : 2,
//   "height" : 22,
//   "weight" : 200,
//   "record" : "2020/10/12"
// }
// Child_size.create(child_s)


 Child_size.findbyChildId= (child_id, result) =>{
  sql.query(`select * from child_size_tracker where child_id = ${child_id}` ,(err, res)=>{
    if(err){
      console.log("erorr:", err);
      result(err, null);
      return;
    }
    if(res.length){
      console.log("found child size data by child id ", res);
      result(null, res);
      return;
    }
result({kind: "not_found"}, null);
  });
 };

Child_size.findById = (size_id, result) => {
    sql.query(`SELECT * FROM Child_size_tracker WHERE size_id = ${size_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Child size data by id: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  Child_size.getAll = result => {
    sql.query("SELECT * FROM Child_size_tracker", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Child size all data: ", res);
      result(null, res);
    });
  };

//to do 
//functions and sql statmens that can aggreagte data and create measurements bmi, wekly growth, etc.

module.exports = Child_size;

