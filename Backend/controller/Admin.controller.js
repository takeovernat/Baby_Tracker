

const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxf10a8cc7de3545758b8087dfd72b6e5b.mailgun.org';
const APIKEY= '8ef703a538c5fe1e76728bad47a6bcaf-38029a9d-ad7f1ac3';
const mg = mailgun({apiKey: APIKEY, domain: DOMAIN});




const Admin = require("../Model/admin.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log("body - ", req.body)
  
    // Create a Customer
    const admin = new Admin({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      children: req.body.children,
      phone: req.body.phone
    });
  
    // Save Customer in the database
    Admin.create(admin, (err, data) => {
      //console.log("admin- ", admin)
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Admin.findByUsername(req.params.username,req.body.email,(err, user) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Admin with username ${req.params.username}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Admin with username " + req.params.username
          });
        }
      } else res.send(user);
      

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
  
    Admin.updateByUsername(
      req.params.username,
      new Admin(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Admin with id ${req.params.username}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Admin with username " + req.params.username
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


exports.forgotpassword = (req, res) => {
    const {email} = req.body;

    

        const data = {
          from: 'noreply@baby.com',
          to: 'ahmedthaer4@gmail.com',
          subject: 'Account Activation Link',
          text: 'Testing some Mailgun awesomness!'
        };
        mg.messages().send(data, function (error, body) {
          console.log(body);
        });

    
};