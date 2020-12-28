var express = require("express");//server
var app = express();
var mongoose = require("mongoose");//database
var bodyParser = require("body-parser");//to catch all data on body 

mongoose.connect("mongodb://localhost/sec");//DataBase Name
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/routes");
routes(app);

app.listen(3000, function() {
  console.log("server now is running in port 3000 ");
});
