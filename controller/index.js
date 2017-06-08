// Dependencies
var cheerio = require("cheerio");
var express = require("express");
var router = express.Router();
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
// Requiring our models
var Article = require("../models/Article.js");
var Note = require("../models/Note.js");

router.get("/", function(req, res) {
  Article.find({}, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { articles: doc });
    }
  });
});

// A GET request to scrape the website
// router.get("/scrape", function(req, res) {
//   // First, we grab the body of the html with request
//   request("https://www.buzzfeed.com/news", function(error, response, html) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(html);
//     // Now, we grab every h2 within an article tag, and do the following:
//     $(".card").each(function(i, element) {
//
//       // Save an empty result object
//       var result = {};
//
//       var title = $(this).children("h2").text();
//       var text = $(this).children("p").text();
//
//       // Add the title and text, and save them as properties of the result object
//       result.title = title;
//       result.text = text;
//
//       // Using our Article model, create a new entry
//       // This effectively passes the result object to the entry (and the title and link)
//       var entry = new Article(result);
//
//       if (title && text) {
//
//         // Now, save that entry to the db
//         entry.save(function(err, doc) {
//           // Log any errors
//           if (err) {
//             console.log(err);
//           }
//           // Or log the doc
//           else {
//             console.log(doc);
//           }
//         });
//
//       }
//
//
//
//     });
//   });
//   // Tell the browser that we finished scraping the text
//   res.send("Scrape Complete");
// });
//
// // This will get the articles we scraped from the mongoDB
// router.get("/articles", function(req, res) {
//   // Grab every doc in the Articles array
//   Article.find({}, function(error, doc) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Or send the doc to the browser as a json object
//     else {
//       console.log(doc);
//       res.json(doc);
//     }
//   });
//
// });

module.exports = router;
