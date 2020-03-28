// Assignment Code



// Write password to the #password input
function writePassword() {
  var pwLength = prompt("What will the length of your password be? Choose 1 to 128.");
  var pwNumbers = confirm("Will your password have numbers?");
  var pwLowercase = confirm("Will your password have lowercase letters?");
  var pwUppercase = confirm("Will your password have uppercase letters?");
  var pwSymbols = confirm("Will your password have symbols?");
  var password = generatePassword(pwNumbers, pwLowercase, pwUppercase, pwSymbols, pwLength);
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword(pwNum, pwLower, pwUpper, pwSymb, pwLength) {
  var passwordOptions = ''
  if (pwNum) {
    passwordOptions = '1234567890' + passwordOptions
  };
  if (pwLower) {
    passwordOptions = 'abcdefghijklmnopqrstuvwxyz' + passwordOptions
  };
  if (pwUpper) {
    passwordOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + passwordOptions
  };
  if (pwSymb) {
    passwordOptions = '!@#$%^&*()_=+<>' + passwordOptions
  };
  var passwordString = ''
  for (var i = 0; i < pwLength; i++){
    var randomLetter = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
    passwordString = passwordString + randomLetter
  }
  return(passwordString)
};


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
