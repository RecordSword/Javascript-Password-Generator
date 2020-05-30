//variables
var passwordArray = [];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^']

// Prompts for User after they click button

generateBtn.addEventListener('click', userPrompts);

function userPrompts() {
  //ask the user password length required
  var passwordLength = prompt("Please choose a length between 8 characters and 128 characters")
  console.log(passwordLength);
  passwordLength = parseInt(passwordLength);

    if (passwordLength < 8  || passwordLength > 128) {
        alert("Your password needs to be at least 8 characters and no more than 128");
        return 0
    } 
    else {
        alert ("You have selected " + passwordLength + " characters");
    }

  console.log(passwordLength);
  var upperCaseChoice = confirm("Do you wish to use uppercase?");
  console.log(upperCaseChoice);
  
  if (upperCaseChoice) {
    passwordArray = passwordArray.concat(upperCase);
    console.log(passwordArray);
    //console.log(passwordArray.length);
  }
  var lowerCaseChoice = confirm("Do you wish to use lowercase?");
  console.log(lowerCaseChoice);
  if (lowerCaseChoice) {
    passwordArray = passwordArray.concat(lowerCase);
    console.log(passwordArray);
    //console.log(passwordArray.length);

  }
  var numbersChoice = confirm("Do you wish to use numbers?")
  console.log(numbersChoice);
  if (numbersChoice) {
    passwordArray = passwordArray.concat(numbers);
    console.log(passwordArray);
    //console.log(passwordArray.length);
  }
  var specialCharChoice = confirm("Do you wish to use special character?")
  console.log(specialCharChoice);
  if (specialCharChoice) {
    passwordArray = passwordArray.concat(specialChar);
    console.log(passwordArray);
    console.log(passwordLength);
  }
  var charArray = [];
  for (var i = 0; i < passwordLength; i++) {

    var randomChar = Math.floor(Math.random() * passwordArray.length);
    charArray += passwordArray[randomChar];
  }
  document.getElementById("randomPassword").innerHTML=charArray;
  alert("Your new password is " + charArray);
}