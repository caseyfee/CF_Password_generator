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

// Prompt for Password Requirements

function myPromptsFunction() {
  var hasLowerCharacters = confirm('Click OK to confirm including lowercase characters in your password.');
  var hasUpperCharacters = confirm('Click OK to confirm including uppercase characters in your password.');
  var hasNumCharacters = confirm('Click OK to confirm including numberic and special characters in your password.');
  var passwordLength = prompt('How long do you want your password? [Between 8 and 128 characters]');
  // If false was chosen for hasCharaters, passwordLength, or Validation, then present user with a message

  if (passwordLength>=8 & passwordLength <=128 ) {
    confirm('Your selections have been validated and your password will be generated shortly.');
  } else {
    console.log(confirm("Please enter a number between 8 and 128!"));
  }

    if (hasLowerCharacters) {
    console.log("Okay good-Your password will use lowercase characters");
  } else {
    console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  }

  if (hasUpperCharacters) {
    console.log("Okay good-Your password will use upper characters");
  } else {
    console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  }

  if (hasNumCharacters) {
    console.log("Okay good-Your password will use numberic and special characters");
  } else {
    console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  }

  if (passwordLength) {
    console.log("Okay good-your password will be a decent length");
  } else {
    console.log(confirm("Your password will be much less secure if it less than 8 characters! You may chose to start the generator over"));
  }

  
}

  // Password Generator
    // if characters was confirmed (was true), include in password creation
    // if password length was confirmed (true) include in password creation

  



