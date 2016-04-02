var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CurrentFavorites = new Schema({
  title: String,
  artist: String,
  album: String,
  

});

var CurrentFavorites = mongoose.model('CurrentFavorites', CurrentFavoritesSchema);

module.exports = CurrentFavorites ;
