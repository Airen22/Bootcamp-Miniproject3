// Stat tracker
var wins = 0;
var losses = 0;
var ties = 0;

function gamePlay(){

// User chooses r, p, or s
var userChoice = window.prompt("Choose r, p, or s:");
// if (!userChoice){
//   return.prompt("Choose r, p, or s:");
// }

function validate() {
  if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
  return userChoice;
  } else {
    alert("Invalid entry!");
    prompt("Choose r, p, or s:");
  }
};
validate();
userChoice = userChoice.toUpperCase();


// Computer chooses r, p, or s
var letters = ["R", "P", "S"];
var index = Math.floor(Math.random()*letters.length);
var compChoice = letters[index];

alert("The computer chose: " + compChoice);

// Compare user to comp
if (userChoice === compChoice) {
  alert("It's a tie!")
  ties++
} else if (
  (userChoice === "R" && compChoice === "S") ||
  (userChoice === "P" && compChoice === "R") ||
  (userChoice === "S" && compChoice === "P")) {
  alert("You win!");
  wins++
 } else {
  alert("You lost!");
  losses++;
}

// Show stats
alert("Stats:\n Wins: " + wins + "\n Losses:" + losses+ "\nTies:" + ties);

var playAgain = confirm("Would you like to play again?");
if(playAgain){
    gamePlay();
};
};

gamePlay();

