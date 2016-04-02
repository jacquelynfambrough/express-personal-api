// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var newProfile = {
  name: "Jackie Fambrough"
  github_link: "",
  github_profile_image:"",
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

db.Profile.create(newProfile, function(err, profile){
  if (err){
    return console.log("Error: Oh no. ", err);
  }

  console.log("My Profile", profile._id)
  process.exit(); // we're all done! Exit the program.
})
