"use strict";

function Person(name, birthdate, friends){
    this.myname = name;
    this.birthdate = birthdate;
    this.friends = friends;
}

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

  Person.prototype.greeting = function() {
    //The following code is behaving strangely. Prints 'undefined'
    var greeting = "Hey I'm " + this.myname;
    return greeting;
  }

  Person.prototype.addFriend = function(friend) {
    this.friends.push(friend);
  }

  Person.prototype.toString = function(){
    return this.myname;
  }

var javin = new Person("Javin", "1994/11/11", [nate,cotter]);
var cotter = new Person("Cotter", "1994/11/16", [javin,nate]);
var christian = new Person("Cotter", "1996/02/04", [nate]);
var nate = new Person("Nate", "1995/06/17", [javin,cotter]);


console.log(nate.greeting());
console.log("I'm " + nate.getAge(nate.birthdate) + " years old.");
console.log("My friends are: " + nate.friends);
nate.addFriend(christian);
console.log("However, now my friends are: " + nate.friends);
