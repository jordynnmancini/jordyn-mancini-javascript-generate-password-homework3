// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);


// Arrays for each type of character 
var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomSymbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

// empty array that will be filled in later based on the user's selections 
var allPossibleCharacters = [];


//define generatePassword function - rest of the code lives within this function  
function generatePassword() {
  var pwLength = Number.parseInt(window.prompt("How many characters do you want your password to be? Enter a value between 8-128."), 10);
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8-128 characters.");
    window.prompt("Enter a length between 8-128:");
  }
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Please try again."); 
    return; 
  }
  var confirmLowerCase = window.confirm("do you want lower case letters?");
  var confirmUpperCase = window.confirm("do you want upper case letters?");
  var confirmNumbers = window.confirm("do you want numbers?");
  var confirmSymbols = window.confirm("do you want symbols?");

  if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSymbols === false) {
    window.alert("Cannot generate password based on your selection. Please try again.");
    return;

  } else {

    if (confirmLowerCase === true) {
      allPossibleCharacters = allPossibleCharacters.concat(randomLower);
    }


    if (confirmUpperCase === true) {
      allPossibleCharacters = allPossibleCharacters.concat(randomUpper);

    }

    if (confirmNumbers === true) {
      allPossibleCharacters = allPossibleCharacters.concat(randomNumber);

    }

    if (confirmSymbols === true) {
      allPossibleCharacters = allPossibleCharacters.concat(randomSymbol);

    }
    
    var password = [];

    for (var i = 0; i < pwLength; i++) {
      var random = allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
      password.push(random);
    }

    var finalPW = password.join("");
    return finalPW;
  }
}