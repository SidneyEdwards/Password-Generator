//Creates the button for the password generator
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//Value that is written on the Page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword();
// writePassword();
document.getElementById("password").value = password;

//Arrays for Password Options
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];


function generatePassword() {
  var passwordLength = prompt("Choose a password length between the number 8 and 128.");

  if (!passwordLength) return "No Password";

passwordLength = parseInt(passwordLength);
console.log(typeof passwordLength, passwordLength);

if(!passwordLength){
  alert("Please enter a valid number.")
  return generatePassword();
}
if(passwordLength <8 || passwordLength >128) {
  alert("Please enter a number between 8 and 128.")
  return generatePassword();
}


//Include Numbers in Password
var allCharacters = [];
var includeNumbers = confirm("Include numbers?");

if (includeNumbers) {
allCharacters = allCharacters.concat(numericCharacters);
}
  allCharacters = allCharacters
  console.log(allCharacters);

// Include lower case in Password
var includeLowercase = confirm("Include lower-cased letters?");

if(includeLowercase) {
  allCharacters = allCharacters.concat(lowerCasedCharacters);
}
  allCharacters = allCharacters;
  console.log(allCharacters);


// Include upper case in Password
var includeUppercase = confirm("Include upper-cased letters?");

if(includeUppercase) {
  allCharacters = allCharacters.concat(upperCasedCharacters);
}
  allCharacters = allCharacters
  console.log(allCharacters);


// Include special characters in Password
var includeSpecialCharacters = confirm("Include special characters?");

if(includeSpecialCharacters) {
  allCharacters = allCharacters.concat(specialCharacters);
}


//Select randomly for the number of characters in the password and generate password in the text box
var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * allCharacters.length);
    randomPassword = randomPassword + allCharacters[randomChar];
  }
  return randomPassword;
}




