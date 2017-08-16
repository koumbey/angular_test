var express = require("express");
var app     = express();
var data = require("./data/todo")
var morgan  = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());

app.get("/api/students", function(req, res){
   res.json(data)
});

app.get("/api/students/:nom", function(req, res){
   var nom = req.params.nom;
   res.json(data.filter(el => el["nom"] === nom));
});

app.get("/api/students/:prenom", function(req, res){
   var prenom = req.params.prenom;
   res.json(data.filter(el => el["prenom"] === prenom));
});

app.get("/api/students/:age", function(req, res){
   var age = req.params.age;
   res.json(data.filter(el => el["Age"] === age));
});

app.get("/", function(req, res) {
	res.sendfile("./public/index.html");
});


app.listen(8080);
console.log("App listening on port 8080")