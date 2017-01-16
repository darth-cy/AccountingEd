var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Add database connection
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on("error", console.error);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lanyardblue");

app.set("/views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));

// Configure cookie parser
app.use(cookieParser());

// Configure body parser
app.use(bodyParser.json());

require("./routes")(app);

app.listen((process.env.PORT || 5000), function(){
  console.log("Listening on port " + (process.env.PORT || 5000));
})
