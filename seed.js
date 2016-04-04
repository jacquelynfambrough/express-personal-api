// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profile = {
  name: "Jackie Fambrough",
  github_link:"https://github.com/jacquelynfambrough",
  github_profile_image:"https://avatars1.githubusercontent.com/u/17692486?v=3&s=460",
  pets:[{
    name:"Antonio",
    type:"dog",
    alive:true
  },
  {
    name:"Beatrice",
    type:"cat",
    alive:false
  }]
};
var songs = [{
  title: "Murakami",
  artist: "Made In Heights",
  album: "Without My Enemy What Would I do"

},
{
  title: "Genesis",
  artist: "Grimes",
  album: "Visions"

}];



db.Profile.remove({}, function(err, profile){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all profile');
  }


    // create new records based on the array books_list
    db.Profile.create(profile, function(err, profile){
      if (err) { return console.log('err', err); }
      console.log("created profile", profile);

    });
});
// remove all records that match {} -- which means remove ALL records
db.CurrentFavorites.remove({}, function(err, music){
console.log(songs);
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all songs');
  }

    // create new records based on the array songs
    db.CurrentFavorites.create(songs, function(err, music){
      console.log(err, music);
      if (err) { return console.log('err', err); }
      console.log("created songs");
      process.exit();
    });
});
