// Assignment code here

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["@", "#", "$", "%", "&", "*", "!"]
var characterSet = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
// ask user to enter password length
var passwordLength = window.prompt("Please enter password length.");
// check to see if password length meets critera
var passwordLengthNum = parseInt(passwordLength); 
// if password length doesnt meet criteria, inform user that input is invalid. enter password length again.
if (passwordLengthNum <= 8 && passwordLengthNum >= 128) {
  window.alert("Invalid input!");
  generatePassword();
} 




// if something is selected create the data set
// run a for loop for as many characters the user would like to create 
// select a character at random from data set append character to password

}

// if password length meets criteria ask user if they would like to include  include lowercase, uppercase, numeric, and/or special characters

var getCharacterRequirement = function() {
  var useLowercase = window.confirm("Would you like to use lowercase?");
  var useUppercase = window.confirm("Would you like to use Uppercase?");
  var useNumeric = window.confirm("Would you like to use numeric vaules?");
  var useSpecialCharacters = window.confirm("Would you like to use Special Characters?");



// check to see if there is at leasst 1 certain type of chatacter selcted (below)
if (useLowercase || useUppercase || useNumeric || useSpecialCharacters) {
  if (useLowercase) {
    characterSet = characterSet + lowerCaseChars;
  }
  
  if (useUppercase) {
    characterSet = characterSet + upperCaseChars;
  }

  if (useNumeric) {
    characterSet = characterSet + numericChars;
  }

  if (useSpecialCharacters) {
    characterSet = characterSet + specialChars;
  }


  
} 

else {
  getCharacterRequirement();
  // if user doesnt select 1 certain character select, inform user that input is invalid, enter character select again
  
}
}



// print password










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
