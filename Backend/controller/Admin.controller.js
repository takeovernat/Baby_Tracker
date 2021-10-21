const Admin = require("../Model/admin.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const admin = new Admin({
      email: req.body.id,
      name: req.body.name,
      username: req.body.username,
      child_id: req.body.child_id
    });
  
    // Save Customer in the database
    Admin.create(admin, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Admin.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Admin with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Admin with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Admin.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Admins."
        });
      else res.send(data);
    });
  };

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Admin.updateById(
      req.params.id,
      new Admin(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Admin with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Admin.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Admin with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Admin with id " + req.params.id
          });
        }
      } else res.send({ message: `Admin was deleted successfully!` });
    });
  };

  exports.deleteAll = (req, res) => {
    Admin.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Admins."
        });
      else res.send({ message: `All Admins were deleted successfully!` });
    });
  };