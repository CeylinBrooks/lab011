'use strict';

//global varibles

var goats = [];
var totalClicksAllowed = 0;
var myContainer = document.getElementById('container');
var imgOne = document.getElementById('img-one');
var imgTwo = document.getElementById('img-two');
var imgThree = document.getElementById('img-three');


//constructor
function Goat(name){
  this.name = name;
  this.src = `images/${name}.jpg`;
} 

var myGoat = new Goat('crusin-goat','jpg')


//functions

//event handler

//event listener



