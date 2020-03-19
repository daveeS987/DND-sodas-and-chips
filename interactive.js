function intialGreeting() {
  var person = prompt("Please enter your name");
  var txt = "Hello " + person + "! How are you today?";
  alert(txt);
  // document.write('<h1>' + txt + '</h1>');
}

function chipsMessage() {
  var answer = prompt("How many bags of chips a day do you eat?");
  var chipAmount = "We're glad you eat " + answer + " bags of chips a day!!" 
  document.write('<h2>' + chipAmount + '</h2>');
}

function timeBasedMsg() {
  var today = new Date();
  var hourNow = today.getHours();
  var greetings;
  if (hourNow > 18) {
      greeting = 'Have some Chips with Dinner!';
  } else if (hourNow > 12) {
      greeting = 'Have an afternoon snack!';
  } else if (hourNow > 0) {
      greeting = 'Breakfast for champions!';
  } else {
      greeting = 'Welcome';
  }
  document.write('<h2>' + greeting + '</h2>');
}
// timeBasedMsg();

// function getFavoriteChip() {
//   var favoriteChip = prompt("Which do you prefer? doritos, pringles, or cheetos?");

// }