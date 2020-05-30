# Javascript-Password-Generator
An application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

In this project, we utilised Javascript in order to create a password based on a variation of Uppercase, lowercase, numbers and special characters. One of the more challenging moments were to create functions to randomly access the array of characters based on the users prompted inputs.

Link to code:
A link to the Generator - https://recordsword.github.io/Javascript-Password-Generator/Index.html

Screenshots: 
https://recordsword.github.io/Javascript-Password-Generator/Snips/Front_page.jpg

https://recordsword.github.io/Javascript-Password-Generator/Snips/Generate_BTN_activate.jpg

https://recordsword.github.io/Javascript-Password-Generator/Snips/Prompts_in_program.jpg

https://recordsword.github.io/Javascript-Password-Generator/Snips/Generated_password_alert.jpg

https://recordsword.github.io/Javascript-Password-Generator/Snips/Generated_password.jpg

Assignment Details
GIVEN I need a new, secure password
<!-- Generate Btn -->
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
<!-- Prompt between 8 to 128 characters -->
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
<!-- Prompt Character types -->
WHEN prompted for character types to include in the password
<!-- Check box for each type -->
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
<!-- Generate Password -->
WHEN the password is generated
<!-- Alert Create with Clipboard for copying -->
THEN the password is either displayed in an alert or written to the page

 <!-- label for="" Number of Charaters</label> -->
<!-- input type="number" min="8" max="128" value="8" id=charaterRangeNum> -->