'use strict';

//global varibles

var goats = [];
var totalClicksAllowed = 0;
var clicks = 0;
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('imgone');
var imgTwoEl = document.getElementById('imgtwo');
var imgThreeEl = document.getElementById('imgthree');


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

new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-away');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');


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
renderGoats();

//console.log(goatOne, goatTwo);

//event handler

function handleClick(event) {
  var clickedGoat = event.target.alt;
  clicks++;

  renderGoats();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListener('click', handleClick);

  }


  //event listener

}
myContainer.addEventListener('click', handleClick);
