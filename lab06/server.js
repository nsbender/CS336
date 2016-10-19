const express = require('express')
const app = express();
const http_status = require('http-status-codes');

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));

// HTTP route and return code examples.

// This responds to GET requests for a hello message.
app.get('/request', function(req, res) {
  res.status(http_status.ACCEPTED);
  res.send("Hello, Express route!");
});
// Respond to HEAD requests
app.head('/request', function(req, res) {
  res.send();
});
// This responds to POST requests
app.post('/request', function (req, res) {
  res.send('Got a POST request');
});
// This responds to PUT requests
app.put('/request', function (req, res) {
  res.send('Got a PUT request');
});
// This responds to DELETE requests
app.delete('/request', function (req, res) {
  res.send('Got a DELETE request');
});

// This rejects access to this "lost" resource.
app.get('/request', function(req, res) {
  res.sendStatus(http_status.NOT_FOUND);
});

app.listen(PORT, HOST, () => {
  console.log("listening on " + HOST + ":" + PORT + "...");
});

// Respond to any type of bad request
app.all('*', function(req, res) {
  res.sendStatus(http_status.BAD_REQUEST);
});
