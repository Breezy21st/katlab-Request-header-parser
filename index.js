// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});


// Define a route for /api/whoami
app.get('/api/whoami', (req, res) => {
  // Get IP address from the request
  const ipaddress = req.ip;

  // Get preferred language from the 'accept-language' header
  const language = req.headers['accept-language'];

  // Get software information from the 'user-agent' header
  const software = req.headers['user-agent'];

  // Create a JSON object with the collected information
  const result = {
    ipaddress: ipaddress,
    language: language,
    software: software,
  };

  // Send the JSON response
  res.json(result);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});