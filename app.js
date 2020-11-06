'use strict';

//global varibles
var gifts = [];
var totalClicksAllowed = 0;
var clicks = 25;
var renderQueue = [];
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('imgone');
var imgTwoEl = document.getElementById('imgtwo');
var imgThreeEl = document.getElementById('imgthree');
var ctx = document.getElementById('myChart');

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
new Gift('bag');
new Gift('banana');
new Gift('bathroom');
new Gift('chair');
new Gift('cthulhu');
new Gift('dog-duck');
new Gift('dragon');
new Gift('pen');
new Gift('pet-sweep');
new Gift('scissors');
new Gift('shark');
new Gift('tauntaun');
new Gift('unicorn');
new Gift('usb');
new Gift('water-can');
new Gift('wine-glass');


console.log(getRandomGiftsIndex());

function populateQueue() {
  renderQueue = [];
  while(renderQueue.length < 3){
    var item = getRandomGiftsIndex();
    while(renderQueue.includes(item)){
      item = getRandomGiftsIndex();
    }
    renderQueue.push(item);
  }
}


function renderGifts() {
  populateQueue();
  var giftOne = renderQueue[0];
  var giftTwo = renderQueue[1];
  var giftThree = renderQueue[2];
  imgOneEl.src = gifts[giftOne].src;
  imgOneEl.alt = gifts[giftOne].name;
  gifts[giftOne].views++;

  imgTwoEl.src = gifts[giftTwo].src;
  imgTwoEl.alt = gifts[giftTwo].name;
  gifts[giftTwo].views++;

  imgThreeEl.src = gifts[giftThree].src;
  imgThreeEl.alt = gifts[giftThree].name;
  gifts[giftThree].views++;
}
renderGifts();



//event handler

function handleClick(event) {
  var clickedGift = event.target.alt;
  clicks++;
  for (var i = 0; i < gifts.length ; i++){
    if (clickedGift === gifts[i].name){
      console.log(` ${gifts[i].name} is ${gifts[i].votes} `);
      gifts[i].votes++;
      //console.log(gifts[i].votes);
    }
  }

  renderGifts();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListener('click', handleClick);

  }


  //event listener

}
myContainer.addEventListener('click', handleClick);



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
});
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
});
