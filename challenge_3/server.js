const express = require('express');
const app = express();
const port = 3333;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
});

