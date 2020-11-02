'use strict';

//global varibles

var goats = [];
var totalClicksAllowed = 0;
var myContainer = document.getElementById('container');
var imgOne = document.getElementById('img-one');
var imgTwo = document.getElementById('img-two');
var imgThree = document.getElementById('img-three');


//constructor
function Goat(name) {
  this.name = name;
  this.src = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  goats.push(this);
}

//functions

function getRandomGoatsIndex() {
  return Math.floor(Math.random() * goats.length);
}

var goatOne = getRandomGoatsIndex();
var goatTwo = getRandomGoatsIndex();
var goatThree = getRandomGoatsIndex();
while (goatOne === goatTwo) {
  goatTwo = getRandomGoatsIndex();
}

//event handler

//exectable code

new Goat('crusin-goat', 'jpg');
new Goat('float-your-goat', 'jpg');
new Goat('goat=away', 'jpg');
new Goat('goat-out-of-hand', 'jpg');
new Goat('kissing-goat', 'jpg');
new Goat('sassy-goat', 'jpg');
new Goat('smiling-goat');
new Goat('crusin-goat');
//event listener



