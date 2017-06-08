// Dependencies
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var path = require("path");
// Requiring models and controller
var Article = require("./models/Article.js");
var Note = require("./models/Note.js");
var controller = require("./controller");

// PORT
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/news-scraper");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Set Handlebars as view engine
var hbs = exphbs.create({
  layoutsDir: "views/layouts",
  defaultLayout: "main"
});

// set handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", controller);

app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
