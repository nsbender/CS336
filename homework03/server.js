/* A simple webserver that connects to an mLab mongo database
 * and serves a list of people stored in the database.
 *
 *  By: Nathaniel Bender
 *  CS336, Fall 2016
*/

"use strict"

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var db;


app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/people', function(req, res) {
  db.collection("people").find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
  });
});

app.listen(3000, function () {
  console.log('People database app listening on port 3001!');
});

app.post('/api/people', function(req, res) {
  var newPerson = {
    first: req.body.firstName,
    last: req.body.lastName,
    start: req.body.startDate
  };
  db.collection("people").insertOne(newPerson, function(err, result) {
    if (err) throw err;
    var newId = result.insertedId;
    db.collection("people").find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
    });
  });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

MongoClient.connect('mongodb://cs336:bjarne@ds017185.mlab.com:17185/cs336', function (err, dbConnection) {
  if (err) throw err;
  db = dbConnection;
});
