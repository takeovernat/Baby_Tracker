const Child_progress = require("../Model/childprogress.model");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const child_progress = new Child_progress({
        child_id: req.body.id,
        height: req.body.height,
        weight: req.body.weight,
        status: req.body.status,
        day: req.body.day,
        pee_count: req.body.pee_count,
        bowel_count: req.body.bowel_count,
        hours_slept: req.body.hours_slept
    });
  
    // Save Customer in the database
    Child_progress.create(child_progress, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the child's progress."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Child_progress.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Child_progress with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Child_progress with id " + req.params.child_id
          });
        }
      } else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Child_progress.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Child_progresss."
        });
      else res.send(data);
    });
  };
  
