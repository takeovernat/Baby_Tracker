const Child = require("../Model/child.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const child = new Child({
    id : req.body.id,
    admin_id : req.body.admin_id,
    age : req.body.age,
    height : req.body.height,
    weight : req.body.weight,
    diet_id : req.body.diet_id
    });
  
    // Save Customer in the database
    Child.create(child, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Child.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Child with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Child with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Child.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Childs."
        });
      else res.send(data);
    });
  };
