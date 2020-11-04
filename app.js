'use strict';

//global varibles

var goats = [];
var totalClicksAllowed = 0;
var clicks = 0;
var myContainer = document.getElementById('container');
var imgOne = document.getElementById('imgone');
var imgTwo = document.getElementById('imgtwo');
var imgThree = document.getElementById('imgthree');


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
//exectable code

new Goat('crusin-goat', 'jpg');
new Goat('float-your-goat', 'jpg');
new Goat('goat=away', 'jpg');
new Goat('goat-out-of-hand', 'jpg');
new Goat('kissing-goat', 'jpg');
new Goat('sassy-goat', 'jpg');
new Goat('smiling-goat');
new Goat('crusin-goat');

console.log(getRandomGoatsIndex());



function renderGoats() {
  var goatOne = getRandomGoatsIndex();
  var goatTwo = getRandomGoatsIndex();
  var goatThree = getRandomGoatsIndex();
  while (goatOne === goatTwo) {
    goatTwo = getRandomGoatsIndex();
  }
  imgOneEl.src = goats[goatOne].src;
  imgOneEl.alt = goats[goatOne].name;
  

  imgTwoEl.src = goats[goatTwo].src;
  imgTwoEl.alt = goats[goatTwo].name;
}
renderGoats;

console.log(goatOne, goatTwo);

//event handler
function handleClick(event) {
  var clickedGoat = event.target.alt;
  clicks++;

  renderGoats();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListener('click', handleClick);

  }


//event listener

myContainer.addEventListener('click', handleClick);