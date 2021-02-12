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


// Creating functions based on character set encoding (UTF-8) 

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
// }

// function getRandomSymbol() {
//   const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


// var RandomLower = getRandomLower();
// var RandomUpper = getRandomUpper();
// var RandomNumber = getRandomNumber();
// var RandomSymbol = getRandomSymbol();


// Various Arrays 
var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomSymbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

var allPossibleCharacters = []; 
var randomChoice; 


//define generate password (move to line 3?)

function generatePassword(){
  var pwLength = Number.parseInt(window.prompt("How many characters do you want your password to be?"), 10);
  if (pwLength < 8 || pwLength > 128) {
    window.alert ("Password must be between 8-128 Characters.");
    window.prompt ("Enter a length between 8-128:"); 
  }
  var confirmLowerCase = window.confirm("do you want lower case letters?"); 
  var confirmUpperCase = window.confirm("do you want upper case letters?"); 
  var confirmNumbers = window.confirm("do you want numbers?"); 
  var confirmSymbols = window.confirm("do you want symbols?"); 

  if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSymbols === false) {
    window.alert ("Cannot generate password based on your selection. Please try again."); 
    return;  
    
  } 
  
  if (confirmLowerCase === true) {
    allPossibleCharacters.concat(randomLower);

  } 
  
  if (confirmUpperCase === true) {
    allPossibleCharacters.concat(randomUpper);

  } 
  
  if (confirmNumbers === true) {
    allPossibleCharacters.concat(randomNumber);

  } 
  
  if (confirmSymbols === true) {
    allPossibleCharacters.concat(randomSymbol); 

  }

  var password = []; 

  for (var i = 0; i < pwLength; i++) {
    randomChoice = allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
    password.push(randomChoice);
  } 

  return password.join(""); 

}