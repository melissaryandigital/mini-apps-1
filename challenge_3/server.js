const express = require('express');
const app = express();
const port = 3333;

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true, useUnifiedTopology: true});

// Mongoose connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose!');
});

// Mongoose schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  cardNumber: Number,
  expiry: Number,
  CVV: Number,
  billingZip: Number
});


// Mongoose model
const Order = mongoose.model('Order', orderSchema);



app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/order', (req, res) => {
  console.log('POST received to /order route');

  // Send the mongo ID back to the client and save in state
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
});

