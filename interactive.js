var txt;
var person = prompt("Please enter your name");
if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
document.write('<h1>' + txt + '</h1>');


var answer = prompt("How many bags of chips a day do you eat?");
var chipAmount = "We're glad you eat " + answer + " bags of chips a day!!" 
document.write('<h2>' + chipAmount + '</h2>');


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