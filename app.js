var contentful = require('contentful');
// main.js

var client = contentful.createClient({
    space: 'v8crlmuqp7e9',
    accessToken: 'vRcJku13pQF8l64elTwBkzeM22iI1J9P_ti7nmdOjdY',
  });
  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });