
generate.addEventListener('click', writePassword)

function writePassword() {
  var passwordLength = Number(prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."), "8");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select valid password length...")
  }
  else {
    var numbersConfirm = confirm("Do you want numbers in your password?");
    console.log(numbersConfirm)
    var lowerCasesConfirm = confirm("Do you want lowercases in your password?");
    console.log(lowerCasesConfirm)
    var upperCasesConfirm = confirm("Do you want uppercases in your password?");
    console.log(upperCasesConfirm)
    var specialConfirm = confirm("Do you want special characters in your password?");
    console.log(specialConfirm)
    document.getElementById('randomPassword')
    resultEl.value = generatePassword(lowerCasesConfirm, upperCasesConfirm, numbersConfirm, specialConfirm, passwordLength);
    const password = resultEl.value;

  }
}
console.log(writePassword)
//DOM elements
const resultEl = document.getElementById('randomPassword');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions
function getRandomLower() {
  return rando("qwertyuiopasdfghjklzxcvbnm")
}

function getRandomUpper() {
  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
  return rando(9);
}

function getRandomSymbol() {
  return rando('!@#$%^&*(){}[]=<>/,.');
}