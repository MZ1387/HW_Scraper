// Require mongoose
var mongoose = require("mongoose");
// Create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  text: {
    type: String,
    trim: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Use the above schema to make the Article model
var Article = mongoose.model("Article", ArticleSchema);

// Export the model so the server can use it
module.exports = Article;
