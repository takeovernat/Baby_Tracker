const Child_health = require("../Model/child.health.model");
const Child = require("../Model/child.model");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const child_health = new Child_health({
        
        child_id : req.body.child_id,
        meal_count : req.body.meal_count,
        daily_calories : req.body.daily_calories,
        diaper_change_hard : req.body.diaper_change_hard,
        diaper_change_soft : req.body.diaper_change_soft,
        water_intake_cups : req.body.water_intake_cups ,
        child_movement : req.body.child_movement,
        sleep_time : req.body.sleep_time,
        record : req.body.record

    });
  
    // Save Customer in the database
    Child_health.create(child_health, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the child's progress."
        });
      else res.send(data);
    });
  };

 
  exports.findOne = (req, res) => {
    Child_health.findByChildId(req.params.child_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Child health data with id ${req.params.child_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving health data with id " + req.params.child_id
          });
        }
      } else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Child_health.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Child_progresss."
        });
      else res.send(data);
    });
  };
  
