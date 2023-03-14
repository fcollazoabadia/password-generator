// Added variables to house varied characters
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
]
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
]
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
  '(',
  ')',
  '{',
  '}',
  '[',
  ']',
  '~',
  '-',
  '_',
  '.',
];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt('Choose a password length between 8 and 128');
  
    if(!passwordLength) return 'No Password';

    passwordLength = parseInt(passwordLength);
    
    console.log(typeof passwordLength, passwordLength); 
  
  if(!passwordLength) {
    console.log('stop')
    alert('Please enter a valid Number.');
    return generatePassword();
  }

  if(passwordLength < 8 || passwordLength > 128){
    alert('Please enter a number between 8 and 128.');
    return generatePassword();
  }

// Added an array to house prompts for including other characters

var allCharacters = [];

var includeNumbers = confirm('Include numbers?');

if(includeNumbers) {
allCharacters = allCharacters.concat(numericCharacters);
}

var includeSpecial = confirm('Include special characters?');

if(includeSpecial) {
allCharacters = allCharacters.concat(specialCharacters);
}
var includeLowerCased = confirm('Include lowercased characters?');

if(includeLowerCased) {
allCharacters = allCharacters.concat(lowerCasedCharacters);
}

var includeUpperCased = confirm('Include uppercased characters?');

if(includeUpperCased) {
allCharacters = allCharacters.concat(upperCasedCharacters);
}

console.log(allCharacters);

// Added an Array to randomly generate characters and combine within parameters of user input

var passwordFinal = []

for(let i = 0; i < passwordLength; i++){
  
  var index = Math.floor(Math.random() * allCharacters.length);
  
  var password = allCharacters[index];
  
  var passwordFinal = passwordFinal.concat(password);
}

// Returns generated characters to function

return passwordFinal.join('');

}
