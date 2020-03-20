var findFavoriteChip = function() {  
  var chipArr = ['cheetos', 'cheeto', 'dorito', 'doritos', 'pringle', 'pringles']
  var customerAnswer = prompt("What's your favorite chip on our website?");
  var lowerCaseAnswer = customerAnswer.toLowerCase();
  while (lowerCaseAnswer === '' || chipArr.indexOf(lowerCaseAnswer) === -1) {
    customerAnswer = prompt('Please choose between Cheetos, Doritos, or Pringles');
    lowerCaseAnswer = customerAnswer.toLowerCase();
  }
  var favorite;
  if (lowerCaseAnswer === 'cheetos' || lowerCaseAnswer === 'cheeto') {
    alert("We're glad you love CHEETOS!!!");
    favorite = "CHEETOS";
  } else if (lowerCaseAnswer === 'dorito' || lowerCaseAnswer === 'doritos') {
    alert("We're glad you love DORITOS!!!");
    favorite = "DORITOS";
  } else {
    alert("We're glad you love PRINGLES!!!");
    favorite = "PRINGLES";
  }
  return favorite;
}


function askHowManyChips() {
  var stringAmount = prompt("How many bags of chips would you like?");
  while (stringAmount === '' || isNaN(stringAmount) || stringAmount <= 0) {
    stringAmount = prompt("Please enter a number above 0");
  }
  alert("We're glad you want " + stringAmount + " bags of chips!!");
  return Number(stringAmount);
}


function displayChips() {
  var customersChipsChoice = findFavoriteChip();
  console.log(customersChipsChoice);
  var total = askHowManyChips();
  var result;
  for (var i = 0; i < total; i++) {
    result = result + '<p>findChipImage(customersChipsChoice)</p>';
  }
  return result;
}


function findChipImage(favorite) {
  var chipImage;
  if (favorite === 'CHEETOS') {
    chipImage = '<img src="images/cheeto.png">'; 
  } else if (favorite === 'DORITOS') {
    chipImage = '<img src="images/doritos.png">'; 
  } else if (favorite === 'CHEETOS') {
    chipImage = '<img src="images/pringles.png">'; 
  }
  return chipImage;
}
















// function intialGreeting() {
//   var person = prompt("Please enter your name");
//   var txt = "Hello " + person + "! Thank you for visiting our website!!";
//   // alert(txt);
//   document.write('<h1>' + txt + '</h1>');
// }


// function chipsMessage() {
//   var answer = prompt("How many bags of chips a day do you eat?");
//   var chipAmount = "We're glad you eat " + answer + " bags of chips a day!!" 
//   document.write('<h2>' + chipAmount + '</h2>');
// }


// function timeBasedMsg() {
//   var today = new Date();
//   var hourNow = today.getHours();
//   var greetings;
//   if (hourNow > 18) {
//       greeting = 'Have some Chips with Dinner!';
//   } else if (hourNow > 12) {
//       greeting = 'Have an afternoon snack!';
//   } else if (hourNow > 0) {
//       greeting = 'Breakfast for champions!';
//   } else {
//       greeting = 'Welcome';
//   }
//   document.write('<h2>' + greeting + '</h2>');
// }

