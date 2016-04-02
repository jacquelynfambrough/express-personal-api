var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  type: String,
  alive: Boolean
});

var ProfileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  pets:[petSchema]

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile ;
