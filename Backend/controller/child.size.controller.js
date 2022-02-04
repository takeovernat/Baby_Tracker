const Child_size = require("../Model/child.size.model");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const child_size = new Child_size({
        child_id: req.body.child_id,
        height: req.body.height,
        weight: req.body.weight,
        record : req.body.record
    });
  
    // Save Customer in the database
    Child_size.create(child_size, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the child's size data."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Child_size.findbyChildId(req.params.child_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Child size data with id ${req.params.child_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Child size data with id " + req.params.child_id
          });
        }
      } else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Child_size.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Child size data."
        });
      else res.send(data);
    });
  };
  
