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
    child_id : req.body.child_id,
    admin_username : req.body.admin_username,
    age : req.body.age,
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    age_months : req.body.age_months

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

  exports.findbyAdminUsername=(req,res) =>{
  Child.findbyAdmin(req.params.admin_username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Child that belongs to username ${req.params.admin_username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Children belonging to " + req.params.admin_username
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
