const sql = require('../db');

const Child_progress = function(child){
    this.child_id = child.child_id;
    this.height = child.height;
    this.weight = child.weight;
    this.status = child.status;
    this.day = child.day;
    this.pee_count = child.pee_count;
    this.bowel_count = child.bowel_count;
    this.hours_slept = child.hours_slept;
}

Child_progress.create = (newchild_progres, result) => {
    sql.query("INSERT INTO Child_progress SET ?", newchild_progres, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Child_progress: ", { id: res.child_id, ...newchild_progres });
    result(null, { id: res.id, ...newchild_progres });
  });
};

Child_progress.findById = (id, result) => {
    sql.query(`SELECT * FROM Child_progress WHERE child_id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Child_progress: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  Child_progress.getAll = result => {
    sql.query("SELECT * FROM child_progress", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Child_progress: ", res);
      result(null, res);
    });
  };

module.exports = Child_progress;

