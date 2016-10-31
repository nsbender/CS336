/* A simple webserver that contains and servers a JSON array of People objects
 *  and data about that Person.
 *
 *  By: Nathaniel Bender
 *  CS336, Fall 2016
*/

"use strict"

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

class Person {
  //The Person object with a constructor and data members
	constructor(firstName, lastName,startDate) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.startDate = startDate;
	}
}

//Create an array of newly defined people
var people = {
  "nsb2": new Person("Nathaniel","Bender","2013/06/17"),
  "cdh3": new Person("Christiaan","Hazlett","2012/05/14"),
  "acc3": new Person("Adam","Christensen","2000/11/01")
}

// display all Person objects in the people array
app.get('/people', function(req, res) {
  res.json(people);
});

// Add a user with the specified id to the JSON list
app.post('/people', function (req, res) {
  // Append the new person to the list with the fields specified
  people[req.body.personID] = new Person(req.body.firstName, req.body.lastName, req.body.startDate);
  res.send(req.body.firstName + " " + req.body.lastName + " successfully added! ");
});

// Display the user with the specified id in the JSON list
app.get('/person/:personID', function(req, res) {
  if (req.params.personID in people) {
    res.json(people[req.params.personID]);
  }
  else {
    res.sendStatus(404);
  }
});

// Update the user with the specified id in the JSON list
app.put('/people/:personID', function (req, res) {
  var error;
  if (req.params.personID in people) {
			people[req.params.personID].firstName = req.body.firstName
			people[req.params.personID].lastName = req.body.lastName
			people[req.params.personID].startDate = req.body.startDate
			message = "Updated " + req.params.personID;
	}
  else {
    error = "User not found. Info not updated!"
  }
  res.send(error);
});

  // Delete the user with the specified id from the JSON list
  app.delete('/person/:personID', function (req, res) {
    var error;
    if (req.params.personID in people) {
  			delete people[req.params.personID];
        error = req.params.personID + " deleted."
  	} else {
      error = "User not found. User not deleted!"
    }
    res.send(error);
  })

// Show the name of the user with the specified id in the JSON list
app.get('/person/:personID/name', function(req, res) {
  if (req.params.personID in people) {
    res.json({"First Name": people[req.params.personID].firstName,
              "Last Name" : people[req.params.personID].lastName});
  }
  else {
    res.sendStatus(404);
  }
});

// Show the number of years of the user with the specified id in the JSON list
app.get('/person/:personID/years', function(req,res) {
  if (req.params.personID in people) {
    res.json({ "Years" : getTime(people[req.params.personID].startDate)});
  }
  else {
    res.sendStatus(404);
  }
});

//Create a new user based on the encoded data sent to this address.
//Interpret the data and create a new JSON object.
app.post('/addPerson', function(req, res) {
    people[req.body.inputID] = new Person(req.body.inputFirst, req.body.inputLast, req.body.inputStart);
    //Display the person
    res.send('Submitted form info<br>ID: <code>' + req.body.inputID
    + '</code><br>First name: <code>' + req.body.inputFirst
    + '</code><br>Last name: <code>' + req.body.inputLast
    + '</code><br>Started on: <code>'+ req.body.inputStart + '</code>');
});

//Search the people JSON list for users with the submitted id.
// Return them in the encoded string "result", or return an
// error in the result field if they are not found
app.post("/searchPerson", function(req, res) {
    var result;
    if (req.body.name in people) {
        result = "Person id: " + req.body.name +
        "<br> First name: " + people[req.body.name].firstName +
        "<br> Last name: " + people[req.body.name].lastName +
        "<br> Started on: " + people[req.body.name].startDate;
    }
    else {
        result = "User not found!";
    }
    res.send({"content" : result});
});

//Function for determining years a person has been in the list based on their start date
function getTime(dateString) {
    var today = new Date();
    var startDate = new Date(dateString);
    var years = today.getFullYear() - startDate.getFullYear();
    var m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }
    return years;
}
