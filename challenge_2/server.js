const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const _ = require('underscore');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});


// Create HTML form template to send in server response
// Textarea is populated with user's initial input
let compiled = _.template('<h1>Mini App 2 - CSV Report Generator</h1><form action="/upload_json" method="POST" class="json-form"><textarea id="json-input" name="json-input" rows="50" cols="100"><%= inputData %></textarea><button type="submit" class="submit">SUBMIT</button></form><div id="csv"><%= csvData %></div>');


let convertToCSV = function (stringData) {

  let string = stringData.slice(0, - 1);
  var data = JSON.parse(string);

  // Build the first line of column names in the CSV output
  let colNames = '';
  let dataLines = '';
  let results = '';

  // Iterate through first object and set properties as colNames
  for (var property in data) {
    if (property !== 'children') {
    colNames += property + ',';
    };
  }

  colNames = colNames.slice(0, -1);
  colNames = colNames += '\n';

  // Add a new line
  // Add value plus a comma
  // If there are children, repeat above

  let helper = function (node) {
    for (var property in node) {
      if (property !== 'children')
        dataLines += node[property] + ',';
    }

    dataLines = dataLines.slice(0, -1);
    dataLines += '<br />';

    if (node.children) {
      node.children.forEach(node => {
        helper(node);
      });
    }

  }

  helper(data);

  results = colNames + '<br />' + dataLines;

  console.log(typeof results);
  console.log(results);

  return results;

}


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

  let csv = convertToCSV(parsedData);

  let resultsPage = compiled({ inputData: parsedData, csvData: csv });

  res.send(resultsPage);

});