"use strict";

//defines the class Person, and its members
function Person(name, birthdate, friends){
    this.myname = name;
    this.birthdate = birthdate;
    this.friends = friends;
}

//Accesor for Age based on birthdate member
Person.prototype.getAge = function(dateString){
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

//Return a greeting for the person based on their name
Person.prototype.greeting = function() {
  var greeting = "Hey I'm " + this.myname;
  return greeting;
}

//Add a friend to the friends list member of a person
Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
}

//Concert a person to their name string when accessed
Person.prototype.toString = function(){
  return this.myname;
}

//Change the name member of a person
Person.prototype.changeName = function(newName){
  this.myname = newName;
}

//Compare the age of a person to another. Returns a string
Person.prototype.ageComp = function(otherPerson){
  var comp = (this.getAge(this.birthdate) < otherPerson.getAge(otherPerson.birthdate)) ? "younger":"older";
  return comp;
}

//Create some person instances
var javin = new Person("Javin", "1994/11/11", [nate,cotter]);
var cotter = new Person("Cotter", "1994/11/16", [javin,nate]);
var christian = new Person("Christian", "1996/02/04", [nate]);
var nate = new Person("GenericName", "1995/06/17", [javin,cotter]);

//Print info about the people and do some operators on them
nate.changeName("Nate");
console.log(nate.greeting());
console.log("I'm " + nate.getAge(nate.birthdate) + " years old.");
console.log("Christian is " + christian.getAge(christian.birthdate) + " years old.");
console.log("I am " + (nate.ageComp(christian)) + " than Christian");
nate.addFriend(christian);
console.log("My friends are: " + nate.friends + "\n");

//Defines a student, which inherits members from a person
function Student(name, birthdate, friends, subject) {
  Person.call(this, name, birthdate, friends);
  this.subject = subject;
  this.greeting = "I'm " + this.myname + "! I'm an " + this.subject + " student!";
}
Student.prototype = Object.create(Person.prototype);

//Define a new student
var adam = new Student("Adam", "1994/09/21", [nate], "engineering");

//Test the student and print its info
console.log(adam.greeting);
console.log("My friend is " + adam.friends);
console.log("I am " + adam.getAge(adam.birthdate) + " years old.");
