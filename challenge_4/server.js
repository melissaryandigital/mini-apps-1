const express = require('express');
const app = express();
const port = 4444;

const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/', (req, res) =>  {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Connect 4 listening at http://localhost:${port}`);
})


