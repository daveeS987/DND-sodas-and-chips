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

document.write('<h3>' + greeting + '</h3>');


var txt;
var person = prompt("Please enter your name", "Harry Potter");
if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
document.write('<h3>' + txt + '</h3>');

var confirm1 = confirm("DO YOU LOVE OUR CHIPS??");
document.write('<h3>' + confirm1 + '</h3>');