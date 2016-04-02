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
// var songs = [{
//   title: "Murakami",
//   artist: "Made In Heights",
//   album: "Without My Enemy What Would I do",
//
// },
// {
//   title: "Genesis",
//   artist: "Grimes",
//   album: "Visions",
//
// }
// };

db.Profile.create(profile, function(err, profile){
  if (err){
    return console.log("Error: Oh no. ", err);
  }

  console.log("Profile", profile)
  process.exit(); // we're all done! Exit the program.
})
