const express = require('express');
const app = express();
const port = 3333;

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
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

  let orderData = req.body;

  Order.findById(orderData.orderId, function (err, orderId) {
    if (err) return console.log(error);

    if (orderId) {

      console.log('found an existing id', orderData.orderId);

      Order.updateOne(
        { _id: orderData.orderId },
        {
          address1: orderData.address1,
          address2: orderData.address2,
          city: orderData.city,
          state: orderData.state,
          zip: orderData.zip,
          phone: orderData.phone,
          cardNumber: orderData.cardNumber,
          expiry: orderData.cardExpiry,
          CVV: orderData.CVV,
          billingZip: orderData.billingZip
        },
        function (err, data) {
          if (err) return console.log(err);

          // Issue is that form stops submitting if it finds an existing record
          res.send(data);
        });



    } else {

      // Create a new document

      const order = new Order({
        name: orderData.name,
        email: orderData.email,
        password: orderData.password,
        address1: orderData.address1,
        address2: orderData.address2,
        city: orderData.city,
        state: orderData.state,
        zip: orderData.zip,
        phone: orderData.phone,
        cardNumber: orderData.cardNumber,
        expiry: orderData.cardExpiry,
        CVV: orderData.CVV,
        billingZip: orderData.billingZip
      });

      // Save to the database
      order.save(function (err, order) {
        if (err) return console.log(err);

        console.log('order saved', order._id);
      });

      // Send the mongo ID back to the client and save in state
      res.send(order._id);
    }

  });

});

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
});

