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


function generatePassword() {
// ask for user's input 
  var pwLength = Number.parseInt(window.prompt("How many characters do you want your password to be? Enter a value between 8-128."), 10);
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8-128 characters. Please try again.");
    return; 
  }
  var confirmLowerCase = window.confirm("do you want lower case letters?");
  var confirmUpperCase = window.confirm("do you want upper case letters?");
  var confirmNumbers = window.confirm("do you want numbers?");
  var confirmSymbols = window.confirm("do you want symbols?");

  // determine which types of characters are available for the password based on the user's selections 
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
    window.alert("Cannot generate password based on your selection. Please try again.");
    return;

  } else {

    if (confirmLowerCase) {
      allPossibleCharacters = allPossibleCharacters.concat(randomLower);
    }


    if (confirmUpperCase) {
      allPossibleCharacters = allPossibleCharacters.concat(randomUpper);

    }

    if (confirmNumbers) {
      allPossibleCharacters = allPossibleCharacters.concat(randomNumber);

    }

    if (confirmSymbols) {
      allPossibleCharacters = allPossibleCharacters.concat(randomSymbol);

    }
    
    // use a for loop to select a random assortment of chacters at the length the user entered 
    var password = [];

    for (var i = 0; i < pwLength; i++) {
      var random = allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
      password.push(random);
    }

    // join the random characters into a string to be rendered on the screen as a password 
    var finalPW = password.join("");
    return finalPW;
  }
}