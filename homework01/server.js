/* A simple webserver that contains and servers a JSON array of People objects
 *  and data about that Person.
 *
 *  By: Nathaniel Bender
 *  CS336, Fall 2016
*/

"use strict"

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

class Person {
  //The Person object with a constructor and data members
	constructor(firstName, lastName, id, startDate) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.personID = id;
		this.startDate = startDate;
	}
}

//Define the 404 Error so it doesnt need to be sent each time
var err404 = { error: "404 - person not found"};

var p1 = new Person("Nathaniel","Bender","01","2013/06/17");
var p2 = new Person("Christiaan","Hazlett","02","2012/05/14");
var p3 = new Person("Drew","Vande Lunde","03","2011/02/22");
var p4 = new Person("Chris","Diley","04","2016/12/30");
var p5 = new Person("Adam","Christensen","05","2000/11/01");


//Create an array of the previously defined people
var people = [p1, p2, p3, p4, p5];

/* getPersonById(id), returns person with given ID if present in the array
 * Param: id, the ID of the person being searched for
 * return a Person, person with ID of id if present in ther array,
 *  else return 0
 */
var getPersonById = function(inputID) {
	for(var i = 0; i < people.length; i++) {
		if(people[i].personID == inputID) {
			return people[i];
		}
	}
	return 0;
}

/* getPersonById(id), returns the firstName of Person with given ID if present in the array
 * Param: inputID, the ID of the person being searched for
 * return a string composed of the firstName and lastName of the person with inputID,
 *  else return 0
 */
var getNameById = function(inputID) {
	for(var i = 0; i < people.length; i++) {
		if(people[i].personID == inputID) {
			return people[i].firstName + " " + people[i].lastName;
		}
	}
  return 0;
}

/* getYearsById(id), returns the number of years a person has been in the organization
 * Param: inputID, the ID of the Person whos years should be returned
 * return an integer of the number of years calculated from a person's startDate
 */
var getYearsById = function(inputID) {
	for(var i = 0; i < people.length; i++) {
		if(people[i].personID == inputID) {
			var today = new Date();
			var startDate = new Date(people[i].startDate);
			var years = today.getFullYear() - startDate.getFullYear();
			var m = today.getMonth() - startDate.getMonth();
		    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
		        years--;
		    }
		 return years;
		}
	}
}

// display all Person objects in the people array
app.get('/people', function(req, res) {
	res.json({people});
});

// Display person with specified ID. If not found return 404
app.get('/person/:id', function(req, res) {
	if(getPersonById(req.params.id) == 0 ) {
    res.status(404).send(err404);
	 } else {
	 	res.json(getPersonById(req.params.id));
	}
});

// display name of the Person with the specified ID. If not found, return 404
app.get('/person/:id/name', function(req, res) {
	if(getPersonById(req.params.id) == 0 ) {
		res.status(404).send(err404);
	 } else {
		res.json(getNameById(req.params.id));
	}
});

// display the number of years a person has. If not found return 404
app.get('/person/:id/years', function(req,res) {
	if(getPersonById(req.params.id) == 0 ) {
		res.status(404).send(err404);
	 } else {
		res.json(getYearsById(req.params.id));
  }
});
