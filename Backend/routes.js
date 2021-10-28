module.exports = app => {
    const Admin = require("./controller/Admin.controller.js");
    const Child = require("./controller/child.controller.js");
    const Child_progress = require("./controller/child.progress.controller.js");
    // Create a new Customer
    app.post("/Admin", Admin.create);
  
    app.get("/Admin", Admin.findAll);

    app.get("/Admin/:id", Admin.findOne);

    app.post("/Child", Child.create);

    app.get("/Child", Child.findAll);

    app.get("/Child/:id", Child.findOne);

    app.post("/Child_Progress", Child_progress.create);
  
    app.get("/Child_Progress", Child_progress.findAll);

    app.get("/Child_Progress/:id", Child_progress.findOne);

    



    // Retrieve all Customers
    //app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    //app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    //app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };