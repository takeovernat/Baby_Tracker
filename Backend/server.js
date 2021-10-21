const express = require("express");

const app = express();

// parse requests of content-type: application/json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to baby tracker." });
});

require("./routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});