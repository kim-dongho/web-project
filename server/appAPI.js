const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Shop = require('./models/shop');
// CONNECT TO MONGODB SERVER
const db = mongoose.connection;
const router = require('./routes')(app, Shop);
db.on('error', console.error);
db.once('open', function () {
  // CONNECTED TO MONGODB SERVER
  console.log('Connected to mongod server');
});

mongoose.connect(
  'mongodb://node:5317797q@15.165.124.23:50864/admin',
  {
    dbName: 'foodcardshop',
  },
  (error) => {
    if (error) console.log('mongodb connect error', error);
    else console.log('mongodb connect');
  }
);

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 5000;

// [RUN SERVER]
const server = app.listen(port, function () {
  console.log('Express server has started on port ' + port);
});
