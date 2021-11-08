// app.js

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://node:5317797q@15.165.124.23:50864/admin',{
    dbName:'foodcardshop',
}, (error)=>{
    if(error)
        console.log('mongodb connect error', error);
    else
        console.log('mongodb connect');
});

db.collection("shop").find({}, function(err, result) {
    if (err) throw err;
    console.log(result.가맹점명);
});

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 3000;

// [CONFIGURE ROUTER]

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});