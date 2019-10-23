var express = require("express");
var app = express();
var sql = require("mssql");
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// config for your database
var config = {
  user: "sa",
  password: "135642",
  server: "localhost",
  database: "sanctum"
};

sql.connect(config, function(err) {
  if (err) console.log(err);
});

app.get("/", function(req, res) {
  res.send("index page");
});

var users = require("./routes/users");
var devices = require("./routes/devices");

app.use("/users", users);
app.use("/devices", devices);

var server = app.listen(4000, function() {
  console.log("Server is running..");
});
