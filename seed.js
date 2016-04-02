// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var aboutMe = {
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

db.Campsite.create(new_campsite, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new campsite", campsite._id)
  process.exit(); // we're all done! Exit the program.
})
