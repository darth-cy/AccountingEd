var express = require("express");
var app = express();

app.set("/views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
})

app.listen((process.env.PORT || 5000), function(){
  console.log("Listening on port " + (process.env.PORT || 5000));
})
