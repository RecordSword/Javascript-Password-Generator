



// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const numbersCharCodes = arrayFromLowtoHigh(48,57)
const lowerCaseCharCodes = arrayFromLowtoHigh(48,57)
const upperCaseCharCodes = arrayFromLowtoHigh(48,57)
const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
console.log(writePassword)

// Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
    console.log(passwordLength)
    if (passwordLength = 8) {
        Alert = "Please select valid password length..."
    }

    var numbersConfirm = confirm("Do you want numbers in your password?");
    console.log(numbersConfirm)
    var lowerCasesConfirm = confirm("Do you want lowercases in your password?");
    console.log(lowerCasesConfirm)
    var upperCasesConfirm = confirm("Do you want uppercases in your password?");
    console.log(upperCasesConfirm)
    var specialConfirm = confirm("Do you want special characters in your password?");
    console.log(specialConfirm)
    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;
}