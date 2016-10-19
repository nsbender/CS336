/*  Nate Bender
 *  CS336
 *  Lab06
 *.

/* Exercise 6.1
 * a - All the methods can be tested using the command line, however, only the GET method can be tested using the browser.
       Head can only be tested from curl.
 * b - 400 (Bad Request) and 404 (Not found) are both acceptable
 *
 * Exercise 6.2
 * a - GET retrieves the information about the form, and POST retrieves the information entered into the form
 * b - The form passes the text from the text fields name, email, and message as request arguments.
 *     The form knows which fields belong to which ID through the HTML div tags. The data is not
 * 		 modified, but the format that it is sent it, is modified.
 */
"use strict";

const express = require('express')
const app = express();
const http_status = require('http-status-codes');
const bodyParser = require('body-parser');

const HOST = "localhost";
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTTP route and return code examples.
app.get('/', function(req, res) {
  res.send('Hello, world!');
});
// This responds to GET requests for a hello message.
app.get('/request', function(req, res) {
<<<<<<< HEAD
  res.status(http_status.ACCEPTED);
  res.send("Hello, Express route!");
=======
  res.send("Hello, request!");
>>>>>>> d9dc7b7825bccd16ae9ba4ff17ae37304e612518
});
// Respond to HEAD requests
app.head('/request', function(req, res) {
  res.send();
});
// This responds to POST requests
app.post('/request', function (req, res) {
  res.send('Got a POST request: ' + req.body.arg + '\n');
});
// This responds to PUT requests
app.put('/request', function (req, res) {
  res.send('Got a PUT request: ' + req.body.arg + '\n');
});
// This responds to DELETE requests
app.delete('/request', function (req, res) {
  res.send('Got a DELETE request: ' + req.body.arg + '\n');
});

// Send the user the form when they request it
app.post('/forms', function(req, res) {
    res.send('Submitted form info<br>User name: <code>' + req.body.user_name
    + '</code><br>User email: <code>' + req.body.user_mail
    + '</code><br>Posted message: <code>'+ req.body.user_message + '</code>');
});

// Respond to any type of bad request
app.all('*', function(req, res) {
  res.sendStatus(http_status.BAD_REQUEST);
});

app.listen(PORT, HOST, () => {
  console.log("listening on " + HOST + ":" + PORT + "...");
});
