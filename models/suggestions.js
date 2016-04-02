var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Suggestions = new Schema({
  title: String,
  artist: String,
  album: String,
  

});

var Suggestions = mongoose.model('Suggestions', SuggestionsSchema);

module.exports = Suggestions ;
