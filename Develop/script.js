var passwordLength = 8;
var upperCharacterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCharacterOptions = [, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var promptAnswers = [];
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',','-','.',':',';','<','=', '>','?','@','[',']','^','_','`','{','}','|','~','\\'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    myPromptsFunction(); // If entered correctly, function will return true. If they mess up - false
    var passwordText = document.querySelector("#password");

  if(myPromptsFunction) {
    var nextPassword = generatePassword();

    passwordText.value = nextPassword;
  } else {
    alert ("Please follow Directions and Try Again. No Password for you");
  }
}

function generatePassword() {
  password = "";
  for (var i = 0; i<passwordLength.length; i++); {
    var firstCharacter = Math.floor(Math.random() * passwordLength.length);
    password = password + promptAnswers[firstCharacter];
  }
  return password
 }



// Prompts for Password Requirements
function myPromptsFunction() {
  promptAnswers = [];
  // Length of Password
  passwordLength = parseInt(prompt('How long do you want your password? [Between 8 and 128 characters]'));
  for (var i = 0; i < passwordLength.length; i++) {
  if (passwordLength >= 8 & passwordLength <= 128) //& (typeof(passwordLength)=Number)
  {
    confirm('Your selections have been validated and your password will be generated shortly.');
    console.log("Okay good-your password will be a decent length");
    // return true;
  } else (isNaN(passwordLength) || passwordLength<8 || passwordLength >128); {
    console.log(alert("Please enter a number between 8 and 128!"));
    console.log(confirm("Just follow the directions."));
    // return false;
  }
}
  // Lowercase
  var lowerCase = confirm('Click OK to confirm including lowercase characters in your password.')
  if (lowerCase) {
    promptAnswers = promptAnswers.concat(lowerCharacterOptions);
    password += lowerCase[Math.floor(Math.random() * passwordLength.length)];
    console.log("Okay good-Your password will use lowercase characters");
  }
  else {
    console.log("weak password");
  }

  // Upper Case
  var upperCase = confirm('Click OK to confirm including uppercase characters in your password.')
  if (upperCase) {
    promptAnswers = promptAnswers.concat(upperCharacterOptions);
    password += upperCase[Math.floor(Math.random() * passwordLength.length)];
    console.log("Okay good-Your password will use uppercase characters");
  }
  else {
    console.log("weak password");
  }

  // Special Characters
  var special = confirm('Click OK to confirm including special characters in your password.')
  if (special) {
    promptAnswers = promptAnswers.concat(specialChar);
    password += specialChar[Math.floor(Math.random() * passwordLength.length)];
    console.log("Okay good-Your password will use special characters");
  }
  else {
    console.log("weak password");
  }
 
  // Numbers
  var num = confirm('Click OK to confirm including numberic characters in your password.')
  
    if (num) {//Add requirement that would push the password out of the loop if  passwordLength.length is met) {
      promptAnswers = promptAnswers.concat(numOptions);
      password += numOptions[Math.floor(Math.random() * passwordLength.length)];
      console.log("Okay good-Your password will use numberic characters");
    }
    else {
      console.log("weak password");
    }
  return true;
}
  // return password;


// writePassword();
// generatePassword();
