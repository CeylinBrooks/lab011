'use strict';

//global varibles
var gifts = [];
var totalClicksAllowed = 25;
var clicks = 0;
var renderQueue = [];
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('imgone');
var imgTwoEl = document.getElementById('imgtwo');
var imgThreeEl = document.getElementById('imgthree');
var names = [];
var views = [];
var votes = [];
var myList = document.getElementById('list');
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
  while (renderQueue.length < 3) {
    var item = getRandomGiftsIndex();
    while (renderQueue.includes(item)) {
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

//chart
function dataFunct() {
  for (var i = 0; i < gifts.length; i++) {
    names.push(gifts[i].name);
    votes.push(gifts[i].votes);
    views.push(gifts[i].views);
  }

}
renderGifts();

function renderResults() {
  for (var i = 0; i < gifts.length; i++) {
    var li = document.createElement('li')
    li.textContent = `${gifts[i].name} received ${gifts[i].votes} votes and was viewed ${gifts[i].views} times.`;
    myList.appendChild(li);
  }
}



//event handler

function handleClick(event) {
  var clickedGift = event.target.alt;
  clicks++;
  for (var i = 0; i < gifts.length; i++) {
    if (clickedGift === gifts[i].name) {
      console.log(` ${gifts[i].name} is ${gifts[i].votes} `);
      gifts[i].votes++;
      //console.log(gifts[i].votes);
    }
  }

  renderGifts();
  if (clicks === totalClicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
    var stringifiedGifts = JSON.stringify(gifts);
    localStorage.setItem('stringifiedGifts', stringifiedGifts);
    renderResults();
    renderChart();

  }


  //event listener

}
myContainer.addEventListener('click', handleClick);




function renderChart() {
  dataFunct();
  console.log(names);



  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: votes
      },
      {
        label: '# of Views',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: views
      }]
    },

    // Configuration options go here
    options: {}
  });
}
