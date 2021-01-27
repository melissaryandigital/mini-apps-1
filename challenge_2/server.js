const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});

app.get('/', (req, res) => {
  if (err)  {
    res.status(400);
    throw err;
  }
  res.status(200);
});

app.post('/upload_json', (req, res) => {

  let data = req.body;

  console.log(data);
  console.log('got a post request from the index page');

  res.status(200);
  res.redirect('/');
});