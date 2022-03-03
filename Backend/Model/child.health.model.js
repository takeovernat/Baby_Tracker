const sql = require('../db');
//const Child = require('./child.model');

const Child_health = function(child){
    this.child_id = child.child_id;
    this.meal_count = child.meal_count;
    this.daily_calories = child.daily_calories;
    this.diaper_change_hard = child.diaper_change_hard;
    this.diaper_change_soft = child.diaper_change_soft;
    this.water_intake_cups = child.water_intake_cups ;
    this.child_movement = child.child_movement,
    this.sleep_time = child.sleep_time,
    this.record = child.record;

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

//test health create record
// const Testhealth = {
//   "child_id": 3,
//   "meal_count": 4,
//   "daily_calories": 1200,
//   "diaper_change_hard": 2,
//   "diaper_change_soft": 3,
//   "water_intake_cups": 4,
//   "child_movement": false ,
//   "sleep_time": 10,
//   "record": "2020/07/12"


// }
// Child_health.create(Testhealth)

Child_health.findByChildId = (child_id, result) =>{
    sql.query(`select * from Child_health_tracker where child_id = ${child_id} order by record desc`,(err,res)=>{
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

