// Array of special characters to be included in password
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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
  'z'
];

// Array of uppercase characters to be included in password
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
  'Z'
];




//Prompt For User to enter Password 
let passwordlength = +prompt("Your Password length");

console.log(passwordlength)



// User Options When generating Password
let lowerCase = confirm('Character Type: LowerCase')

let upperCase = confirm('Character Type: UpperCase')

let numeric = confirm('Character Type: Numeric')

let specialCharacter = confirm('Character Type: Special-Characters')


const userPasswordOptionsArray = [] ;

 console.log(lowerCase, upperCase, numeric)


//User Password 
let userPassword = "";


// Function to prompt user for password options
// function getPasswordOptions() {


// If Statements to Create Array Of the User Password Options
  if(lowerCase == true){

    userPasswordOptionsArray.push(...lowerCasedCharacters)
  }

  if(upperCase == true){
    userPasswordOptionsArray.push(...upperCasedCharacters)
  }

  if (numeric == true){
    userPasswordOptionsArray.push(...numericCharacters)
  }

  if (specialCharacter == true ){
    userPasswordOptionsArray.push(...specialCharacters)
  }

  // If StateMent to Alert User The Password Must Contain A Special Character.
  if ((userPasswordOptionsArray == false) && (upperCase == false) && (numeric == false && (specialCharacter == false)) ){
    alert("Password Must contain A Special Characters")
  }


// }

// Function for getting a random element from an array
function getRandom(arr) {

}

  

// Function to generate password with user input
function generatePassword(arr) {

  // For Loop to select radmom elements from an array

  for (i=0 ; i<passwordlength; i++){
    let randomIndex = Math.floor(Math.random()*arr.length)
      userPassword += arr[randomIndex]
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector('#password');

  //passwordText.value = password;
  passwordText.value = userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


generatePassword(userPasswordOptionsArray)


console.log(userPassword)

