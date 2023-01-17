var passwordLength;
var upperCharacterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCharacterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var promptAnswers = [];
var password;
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~', '\\'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = "";

  var loopPassword = myPromptsFunction();
  var passwordText = document.querySelector("#password");

  if (loopPassword) {
    passwordText.value = generatePassword();
  } else {
    alert("Please follow directions and Try Again. No Password for you");
  }
}

function generatePassword() {
  for (var i = 0; i <= passwordLength; i++) {
    var firstCharacter = Math.floor(Math.random() * promptAnswers.length);
    password = password + promptAnswers[firstCharacter];
  }
  return password;
}

// Prompts for Password Requirements
function myPromptsFunction() {
  promptAnswers = [];
  // Length of Password
  passwordLength = parseInt(prompt('How long do you want your password? [Between 8 and 128 characters]'));

  if (isNaN(passwordLength)) {
    confirm("Just follow the directions.");
    return false;
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128!");
    return false;
  }

  else if (passwordLength >= 8 && passwordLength <= 128) {
    confirm('Your selections have been validated and your password will be generated shortly.');
    console.log("Okay good-your password will be a decent length");
  }

  // Lowercase
  var lowerCase = confirm('Click OK to confirm including lowercase characters in your password.')
  if (lowerCase) {
    promptAnswers = promptAnswers.concat(lowerCharacterOptions);
    password += lowerCharacterOptions[Math.floor(Math.random() * lowerCharacterOptions.length)];
    console.log("Okay good-Your password will use lowercase characters");
  }
  else {
    console.log("weak password");
  }

  // Upper Case
  var upperCase = confirm('Click OK to confirm including uppercase characters in your password.')
  if (upperCase) {
    promptAnswers = promptAnswers.concat(upperCharacterOptions);
    password += upperCharacterOptions[Math.floor(Math.random() * upperCharacterOptions.length)];
    console.log("Okay good-Your password will use uppercase characters");
  }
  else {
    console.log("weak password");
  }

  // Special Characters
  var special = confirm('Click OK to confirm including special characters in your password.')
  if (special) {
    promptAnswers = promptAnswers.concat(specialChar);
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
    console.log("Okay good-Your password will use special characters");
  }
  else {
    console.log("weak password");
  }

  // Numbers
  var num = confirm('Click OK to confirm including numberic characters in your password.')

  if (num) {
    promptAnswers = promptAnswers.concat(numOptions);
    password += numOptions[Math.floor(Math.random() * numOptions.length)];
    console.log("Okay good-Your password will use numberic characters");
  }
  else {
    console.log("weak password");
  }
  
  return true;
}

