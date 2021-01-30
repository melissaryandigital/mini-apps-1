const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const _ = require('underscore');

const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

const path = require('path');
const fs = require('fs');


app.listen(port, () => {
  console.log(`JSON to CSV app listening at http://localhost:${port}`);
});


// Create HTML form template to send in server response
// Textarea is populated with user's initial input
let compiled = _.template('<h1>Mini App 2 - CSV Report Generator</h1><form action="/upload_json" method="POST" class="json-form"><textarea id="json-input" name="json-input" rows="50" cols="100"><%= inputData %></textarea><button type="submit" class="submit">SUBMIT</button></form><div id="csv"><%= csvData %></div>');

// File picker version
let compiledFile = _.template('<h1>Mini App 2 - CSV Report Generator</h1><form action="/upload_json_file" method="POST" class="json-form-file" enctype="multipart/form-data"><input type="file" id="json-file" name= "json-file" accept=".json"><button type="submit" class="submit">SUBMIT</button></form><div id="csv"><%= csvData %></div>');


// jQuery/ Ajax version
let compiledFileAjax = _.template('<h2>jQuery/Ajax Request</h2><form id="json-form-ajax" class="json-form-ajax" enctype="multipart/form-data"> <input type="file" id="jsonfileajax" name= "jsonfileajax" accept=".json"><button type="submit" class="submit">SUBMIT</button></form><%= csvData %></div>');


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
//  colNames = colNames += '\n';

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

  return results;

};


app.get('/', (req, res) => {
  if (err) {
    res.status(400);
    throw err;
  }

  res.status(200);
  res.end();
});



// TEXTAREA IMPLEMENTATION
app.post('/upload_json', (req, res) => {

  // iterate and remove using string method
  let parsedData = req.body['json-input'].replace(/\n\r/, '');

  let csv = convertToCSV(parsedData);

  let resultsPage = compiled({ inputData: parsedData, csvData: csv });

  res.send(resultsPage);

});


// MULTER CONFIG

// Disk storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });




// FILE UPLOAD IMPLEMENTATION
app.post('/upload_json_file', upload.single('jsonfile'), function (req, res) {

  // console.log(req.file);
  // console.log(req.file.path);
  // console.log(req.body);

  return new Promise((resolve, reject) => {

    fs.readFile(path.join(__dirname, req.file.path), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
    .then((data) => {

      let csv = convertToCSV(data);
      let resultsPage = compiledFile({ csvData: csv });

      res.send(resultsPage);
      res.status(200);
      res.end();
    });

});




// AJAX IMPLEMENTATION
app.post('/', upload.single('jsonfileajax'), function (req, res) {

  // console.log(req.file);
  // console.log(req.file.path);
  // console.log(req.body);

  return new Promise((resolve, reject) => {

    fs.readFile(path.join(__dirname, req.file.path), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
    .then((data) => {

      let csv = convertToCSV(data);

      let csvreport = csv.replace(/<br \/>/g, '\n');

      fs.writeFile('./client/reports/CSVReport.csv', csvreport , (err) => {
        if (err) throw err;
        console.log('the file has been saved!');
      });

      res.send(csv);
      res.status(200);
      res.end();
    })
    .catch((err) => {
      throw err;
      res.status(500);
      res.redirect('/');
    })
});