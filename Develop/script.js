// Assignment Code

var pwLength = prompt("What will the length of your password be? Choose 1 to 128.");
var pwNumbers = prompt("Will your password have numbers?");
var pwLowercase = prompt("Will your password have lowercase letters?");
var pwUppercase = prompt("Will your password have uppercase letters?");
var pwSymbols = prompt("Will your password have symbols?");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numChar = prompt("How many characters would you like in your password?  Select a number between 8 and 128.")


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var numChar = prompt("How many characters would you like in your password?  Select a number between 8 and 128.")
//   If (pwLength < 0 || > 128) {return alert("Password not valid.")};
  
//   function generatePassword(pwlength) {
//   If (pwNumbers = "y" || "yes") {include 1234567890};
//   If (pwLowercase = "y"|| "yes") {include abcdefghijklmnopqrstuvwxyz};
//   If (pwUppercase = "y"|| "yes") {include ABCDEFGHIJKLMNOPQRSTUVWXYZ};
//   If (pwSymbols = "y"|| "yes") {include !@#$%^&*()_=+<>};
//   }
    
   
//     var passwordText = "";
//     for (var x = 0; x < pwlength; x++) {
//         var i = Math.floor(Math.random() * chars.pwlength);
//         pass += chars.charAt(i);
//     }
    
//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
