const sql = require('../db');
//const Child = require('./child.model');

const Child_health = function(child){
    this.child_id = child.child_id;
    this.meal_count = child.meal_count;
    this.weight = child.weight;
    this.daily_calories = child.daily_calories;
    this.diaper_change_hard = child.diaper_change_hard;
    this.diaper_change_soft = child.diaper_change_soft;
    this.water_intake_cups = child.water_intake_cups ;
    this.child_movement = child.child_movement,
    this.sleep_time = child.sleep_time,
    this.date = child.date;

}

Child_health.create = (newchild_health, result) => {
    sql.query("INSERT INTO Child_health_tracker SET ?", newchild_health, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("created Child health data: ", { child_id: res.child_id, ...newchild_health });
    result(null, { child_id: res.child_id, ...newchild_health});
  });
};

Child_health.findByChildId = (child_id, result) =>{
    sql.query(`select * from Child_health_tracker where child_id = ${child_id}`,(err,res)=>{
      if(err){
        console.log("error: ", err);
        result(err, null);
        return
      }
      if(res.length){
        console.log("found child health data for child with id ",res );
        result(null, res);
        return;
      }
      result({kind:"not_found"}, null);
    });
};


Child_health.findById = (health_id, result) => {
    sql.query(`SELECT * FROM Child_health_tracker WHERE health_id = ${health_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Child health data by id: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  Child_health.getAll = result => {
    sql.query("SELECT * FROM Child_health_tracker", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Child health all data: ", res);
      result(null, res);
    });
  };

//to do 
//functions and sql statmens that can aggreagte data and create measurements bmi, wekly growth, etc.

module.exports = Child_health;

