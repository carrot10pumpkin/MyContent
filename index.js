const express = require('express');
const path = require('path');
const app = express();
var contentful = require('contentful');
require("dotenv").config();
// main.js
// set the view engine to ejs
app.set('view engine', 'ejs');

// requesting info 



var Items = []


var client = contentful.createClient({
    space: process.env.SPACE_ID  ,
    accessToken: process.env.ACCESS_TOKEN,
  });



client.getEntries().then(function (entries) {
  
  entries.items.forEach(function (entry) {

    if (entry.fields.productName) {
      console.log(entry.fields.productName);
      Items.push(entry)
    }
  });
});






app.use(express.static(path.join(__dirname, 'public')));
app.get('/', async(req, res) => {


  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013},
   ...Items
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";
    res.render('pages/home', {
      Items,
    mascots: mascots,
    tagline: tagline
  });
   
});
app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });