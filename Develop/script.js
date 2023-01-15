var passwordLength = 8;
var upperCharacterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCharacterOptions = [, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var promptAnswers = [];
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'',];

// '\','*','+',',','-','.',':',';','<','=','>','@','[',']','^','_','~','`','{'}'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  password = "";
  for (var = i; i<passwordLength; i++); {
    var ranPassworkd = Math.floor(Math.random() * passwordLength);
    password = password + promptAnswers[randomIndex];
  }
  return password
  // Prompts for Password Requirements
}
// var passwordLength = passwordLength.length



function myPromptsFunction() {
  promptAnswers = [];
  // Length of Password
  passwordLength = parseInt(prompt('How long do you want your password? [Between 8 and 128 characters]'));
  if (passwordLength >= 8 & passwordLength <= 128 & true) //& (typeof(passwordLength)=Number)
  {
    confirm('Your selections have been validated and your password will be generated shortly.');
    console.log("Okay good-your password will be a decent length");
  } else (isNaN(passwordLength)); {
    console.log(alert("Please enter a number between 8 and 128!"));
    console.log(confirm("Just follow the directions."));
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
  }

  else {
    console.log("weak password");
  }


  // Numbers
  var num = confirm('Click OK to confirm including numberic characters in your password.')
  for (var i = 0; i < passwordLength.length; i++) {
    if (num) {//Add requirement that would push the password out of the loop if  passwordLength.length is met) {
      promptAnswers = promptAnswers.concat(numOptions);
      password += numOptions[Math.floor(Math.random() * passwordLength.length)];
      password += hasNumCharacters[Math.floor(Math.random() * passwordLength.length)];
      console.log("Okay good-Your password will use numberic and special characters");
    }
    else {
      console.log("weak password");
    }

// Special Characters
    var special = confirm('Click OK to confirm including special characters in your password.')
    if (special); {
      promptAnswers = promptAnswers.concat(specialChar);
      password += specialChar[Math.floor(Math.random() * passwordLength.length)];
    }
    return true;
  }
}
  // return password;






// writePassword();
// generatePassword();
