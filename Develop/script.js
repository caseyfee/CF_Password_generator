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
  var hasCharacters = confirm('Click OK to confirm including lowercase, uppercase, numberic, and special characters in your password.');
  var passwordLength = confirm('Click OK to confirm password will be between 8 and 128 characters in your password.');
  // If false was chosen for hasCharaters, passwordLength, or Validation, then present user with a message

  if (hasCharacters) {
    console.log("Okay good-your password will use a variety of characters");
  } else {
    console.log(confirm("Your password will be much less secure without a variety of charaters! You may chose to start the generator over"));
  }

  if (passwordLength) {
    console.log("Okay good-your password will be a decent length");
  } else {
    console.log(confirm("Your password will be much less secure if it less than 8 characters! You may chose to start the generator over"));
  }

  var validation = confirm('Your selections have been validated and your password will be generated shortly.');
}

  // Password Generator
    // if characters was confirmed (was true), include in password creation
    // if password length was confirmed (true) include in password creation

  



