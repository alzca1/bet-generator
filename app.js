
// BET GENERATOR

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function numbGen(num) {
  var numbers = [];
  for (var x = 1; x <= num; x++) {
    numbers.push(x);
  }
  return numbers;
}

function combo (bet, numbers) {
  let numb = numbGen(numbers);
  let combination = [];

  for (var i = 1; i <= bet; i++) {
    let index = randomIndex(numb);
    if (!combination.includes(numb[index])) {
      combination.push(numb[index]);
      numb.splice(index, 1);
    }
  }
  combination = combination.sort((a, b) => a - b);
  return combination;
}

// DOM MANIPULATION

var numbButton = document.querySelector('.combo-button-5')
var numbSpan = document.querySelector('.combo-5');
var compButton = document.querySelector('.combo-button-2')
var compSpan = document.querySelector('.combo-2');
var fullButton = document.querySelector('.combo-button-3')

numbButton.addEventListener('click',function(){
    var bet = combo(5,50).join(', ')
    numbSpan.textContent = bet; 
});

compButton.addEventListener('click',function(){
    var bet = combo(2,12).join(', ')
    compSpan.textContent = bet; 
});

fullButton.addEventListener('click', function(){
    var bet1 = combo(5,50).join(', ')
    numbSpan.textContent = bet1; 
    var bet2 = combo(2,12).join(', ')
    compSpan.textContent = bet2; 
} )






