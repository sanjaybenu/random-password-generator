// Create Variables for the type of characters to be used
var smallLetters=["abcdefghijklmnopqrstuvwxyz"];
var capitalLetters=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers=["012345678"];
var specialChar=[" !#$%&'()*+,-./:;<=>?@[^_`{|}~"];
var charset=[];

// Function to Generate Random Password
function passwordGenerator() {
  // User Input to decide password length
    var passwordLength = (prompt("How Long the password should be. Select between 8 and 128"));
    // To prompt if input is less than 8 or greater than 128
    if (passwordLength< 8) {
       passwordLength = (prompt("Please select a number between 8 and 128"))
    }
    if (passwordLength> 128) {
       passwordLength = (prompt("Please select a number between 8 and 128"))
    }
    // User Inputs to use lowercase, uppercase, numbers and/or specila characters
    if (confirm("Do you want to include lowercase in the password?")) {
      var charsetOne=charset+smallLetters;}
  else {charsetOne = charset}; 
    if (confirm("Do you want to include uppercase in the password?")) {
    var charsetTwo=charsetOne+capitalLetters;}
else {charsetTwo = charsetOne};
    if (confirm("Do you want to include numbers in the password?")) {
var charsetThree=charsetTwo+numbers;}
else {charsetThree=charsetTwo};
if (confirm("Do you want to include special characters in the password?")) {
var charsetFour=charsetThree+specialChar}
    else {charsetFour=charsetThree};
    // Atleast one of the above three types are required alert user if not selected
    if (charsetFour===charset) {
    alert("Warning: Please select atleast one character type to generate your password")
    }
    // On meeting all criterion to generate a random password
    else { var password = '';
  for (let i = 0; i < passwordLength; i++) {
    // Pick a random character from the chars string
    var randomIndex = Math.floor(Math.random() * charsetFour.length);
    var randomChar = charsetFour.charAt(randomIndex);
    //Add generated character to the password string
       password += randomChar;
  }
 
  return password;
                   };
};
// Check for Code Below
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // replaced with the name of the password generation function
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

