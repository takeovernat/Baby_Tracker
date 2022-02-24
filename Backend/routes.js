module.exports = app => {
    const Admin = require("./controller/Admin.controller.js");
    const Child = require("./controller/child.controller.js");
    const Child_size = require("./controller/child.size.controller");
    const Child_health = require("./controller/child.health.controller");
    // Create a new Customer
    app.post("/Admin", Admin.create);
  
    app.get("/Admin", Admin.findAll);

    app.get("/Admin/:username", Admin.findOne);

    app.post("/Child", Child.create);

    app.get("/Child", Child.findAll);

    app.get("/Child/:id", Child.findOne);

    app.get("/Child/admin/:admin_username", Child.findbyAdminUsername);

    app.post("/Child_size", Child_size.create);
  
    app.get("/Child_size", Child_size.findAll);

    app.get("/Child_size/:child_id", Child_size.findOne);

    app.post("/Child_health", Child_health.create);
  
    app.get("/Child_health", Child_health.findAll);

    app.get("/Child_health/:child_id", Child_health.findOne);

    app.post("/Admin/:username",Admin.update);

    
  };