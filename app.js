
// main.js
var contentful = require('contentful');


var imagesDiv = document.getElementById('images');

assets.items.forEach(function (asset) {
  var imageURL = 'https:' + asset.fields.file.url;
  var imageDiv = document.createElement("div");
  var imageFile = document.createElement("img");
  imageFile.src = imageURL;
  imageDiv.appendChild(imageFile);
  imagesDiv.appendChild(imageDiv);
});
