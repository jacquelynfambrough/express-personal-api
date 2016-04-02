var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CurrentFavoriteSongs = new Schema({
  title: String,
  artist: String,
  album: String,
  release_date: Date

});

var CurrentFavoriteSongs = mongoose.model('CurrentFavoriteSongs', CurrentFavoriteSongsSchema);

module.exports = CurrentFavoriteSongs ;
