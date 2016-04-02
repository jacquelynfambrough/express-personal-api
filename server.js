// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
   });
/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 // get all of profile
 // app.get('/api/profile', function (req, res) {
 //   // send all profile data at response
 //
 //   console.log('getting my profile info');
 //   var myProf = req.params.profile;
 //   res.json(profile);
 // });

 // get coffee shop information
app.get('/api/profile', function (req, res) {
  // send all books as JSON response
  db.Profile.find(function(err, event){
      if (err) { return console.log("index error: " + err); }
      res.json(event);
  });
});

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/myprofile", description: "Data about me"},
      {method: "GET", path: "/api/currentfavorites", description: "Lists my favorite songs"},
      {method: "POST", path: "/api/suggestions", description: "Suggest songs for me!"}
    ]
  })
});

/**********
 * SERVER *
 **********/



// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
