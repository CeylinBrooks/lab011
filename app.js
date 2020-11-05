'use strict';

//global varibles

var gifts = [];
var totalClicksAllowed = 0;
var clicks = 0;
var renderQueue = [];
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('imgone');
var imgTwoEl = document.getElementById('imgtwo');
var imgThreeEl = document.getElementById('imgthree');


//constructor
function Gift(name) {
  this.name = name;
  this.src = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  gifts.push(this);
}

//functions

function getRandomGiftsIndex() {
  return Math.floor(Math.random() * gifts.length);
}
//exectable code

new Gift('baconbandages');
new Gift('begin-weights');
new Gift('bread-slippers');
new Gift('cameralensmug');
new Gift('donut-seeds');
new Gift('nothing-pck');
new Gift('pickle-phone');


console.log(getRandomGiftsIndex());

// function populateRenderQueue() {
//   renderQueue = [];
//   var uniqueGift = getRandomGiftsIndex();
//   while(!renderQueue.includes(uniqueGift)){
//     renderQueue.push(uniqueGift);





//   }

// }


function renderGifts() {
  // populateRenderQueue();
  var giftOne = renderQueue[0];
  var giftTwo = renderQueue[1];
  var giftThree = renderQueue[2];
  while (giftOne === giftTwo) {
    giftTwo = getRandomGiftsIndex();
  }
  imgOneEl.src = gifts[giftOne].src;
  imgOneEl.alt = gifts[giftOne].name;


  imgTwoEl.src = gifts[giftTwo].src;
  imgTwoEl.alt = gifts[giftTwo].name;

  imgThreeEl.src = gifts[giftThree].src;
  imgThreeEl.alt = gifts[giftThree].name;
}
renderGifts();



//event handler

function handleClick(event) {
  var clickedGift = event.target.alt;
  clicks++;

  renderGifts();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListener('click', handleClick);

  }


  //event listener

}
myContainer.addEventListener('click', handleClick);
