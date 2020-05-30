//variables
var userChoice = [];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^']

// Prompts for User after they click button

generateBtn.addEventListener('click', promptMe);

function promptMe() {
  //ask the user password length required
  var passwordLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters")
  console.log(passwordLength);
  passwordLength = parseFloat(passwordLength);

    if (passwordLength < 8  || passwordLength > 128) {
        alert("Your password needs to be at least 8 characters and no more than 128");
        return
    } 
    else {
        alert ("You have selected " + passwordLength + " characters");
    }

  console.log(passwordLength);
  var upperCaseChoice = confirm("Do you wish to use uppercase?");
  console.log(upperCaseChoice);
  
  if (upperCaseChoice) {
    userChoice = userChoice.concat(upperCase);
    console.log(userChoice);
    //console.log(userChoice.length);
  }
  var lowerCaseChoice = confirm("Do you wish to use lowercase?");
  console.log(lowerCaseChoice);
  if (lowerCaseChoice) {
    userChoice = userChoice.concat(lowerCase);
    console.log(userChoice);
    //console.log(userChoice.length);

  }
  var numbersChoice = confirm("Do you wish to use numbers?")
  console.log(numbersChoice);
  if (numbersChoice) {
    userChoice = userChoice.concat(numbers);
    console.log(userChoice);
    //console.log(userChoice.length);
  }
  var specialCharactersChoice = confirm("Do you wish to use special character?")
  console.log(specialCharactersChoice);
  if (specialCharactersChoice) {
    userChoice = userChoice.concat(specialChar);
    console.log(userChoice);
    console.log(passwordLength);
  }
  var charactersArray = [];
  for (var i = 0; i < passwordLength; i++) {

    var randomCharacter = Math.floor(Math.random() * userChoice.length);
    charactersArray += userChoice[randomCharacter];
  }
  alert("Your new password is " + charactersArray);
}


var numberInArray = Math.floor(Math.random() * userChoice);