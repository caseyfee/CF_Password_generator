var passwordLength = 8;
var upperCharacterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCharacterOptions = [,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numOptions = ['0','1','2','3','4','5','6','7','8','9'];
var promptAnswers =[];
// var specialChar = [' ','!','"','#','$','%','&','\','*','+',',','-','.',':',';','<','=','>','@','[',']','^','_','~','`','{'}',']';

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
// Prompt for Password Requirements
function myPromptsFunction() {
  passwordLength = parseINT(prompt('How long do you want your password? [Between 8 and 128 characters]'));
  if (passwordLength>=8 & passwordLength <=128) //& (typeof(passwordLength)=Number)
   {confirm('Your selections have been validated and your password will be generated shortly.');
  } else (isNaN(passwordLength)); { 
    console.log(confirm("Please enter a number between 8 and 128!"));
  }
// Lowercase
  if(confirm('Click OK to confirm including lowercase characters in your password.'));
    {promptAnswers = promptAnswers.concat(lowerCharacterOptions);
    }
  //   console.log("Okay good-Your password will use lowercase characters");
  // } else {
  //   console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  // }

// Upper Case
  if(confirm('Click OK to confirm including uppercase characters in your password.'));
    { promptAnswers = promptAnswers.concat(upperCharacterOptions);
    }
  // console.log("Okay good-Your password will use upper characters");
  // } else {
  //   console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  // }

// Numbers
  if(confirm('Click OK to confirm including numberic and special characters in your password.'));
    {promptAnswers = promptAnswers.concat(numOptions);
    }
  // if (hasNumCharacters) {
  //   console.log("Okay good-Your password will use numberic and special characters");
  // } else {
  //   console.log(confirm("Your password will be much less secure without a variety of characters! You may want to chose to start the generator over"));
  // }

// Special Characters
if(confirm('Click OK to confirm including special characters in your password.')); {
  promptAnswers = promptAnswers.concat(specialChar);
}
}
  




// function generatePassword() {
  
//   var passwordLength = passwordLength.length
  
//   for (var i=0; i<passwordLength.length; i++) {
//     if (hasNumCharacters) //Add requirement that would push the password out of the loop if  passwordLength.length is met) {
//       password +=hasNumCharacters[Math.floor(Math.random() * passwordLength.length)];
//     } 
//     else {
//     }

//     if (hasLowerCharacters) {
//       password +=hasLowerCharacters[Math.floor(Math.random() * passwordLength.length)];
      
//     } else {
//     }

//     if (hasUpperCharacters) {
//       password +=hasUpperCharacters[Math.floor(Math.random() * passwordLength.length)];
//     } else {
//     }
  
//     if (passwordLength) {
//       console.log("Okay good-your password will be a decent length");
//     } else {
//       console.log(confirm("Just follow the directions."));
//     }
//   }
//   return password;




  
// writePassword();
// generatePassword();


