const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const _ = require('underscore');
const convertToCSV = require('./middleware/convertToCSV');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

// ?  app.use(convertToCSV);

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});

let compiled = _.template('<h1>Mini App 2 - CSV Report Generator</h1><form action="/upload_json" method="POST" class="json-form"><textarea id="json-input" name="json-input" rows="50" cols="100"><%= inputData %></textarea><button type="submit" class="submit">SUBMIT</button></form><div id="csv"><%= csvData %></div>');

app.get('/', (req, res) => {
  if (err) {
    res.status(400);
    throw err;
  }

  res.status(200);
  res.end();
});

app.post('/upload_json', (req, res) => {

  // iterate and remove using string method
  let parsedData = req.body['json-input'].replace(/\n\r/, '');
  console.log(parsedData);
  console.log(typeof parsedData);

  let resultsPage = compiled({inputData: parsedData, csvData: 'coming soon'});

  res.send(resultsPage);

});