// // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","l","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numerics = ["1","2","3","4","5","6","7","8","9","0"];
var specials = ["!","@","#","$","%","^","&","*","(","-","=","+",",",".","/","<",">","?","|"];
var options = [];
var finishedPassword = "";

var passwordText = document.querySelector("#password");

// // Write password to the #password input
function writePassword() {
  var numChar = window.prompt("Select a number of characters between 8-128");
    if (numChar < 8 || numChar > 128) {
      alert("Not a valid number of characters");
      return;
    }
    if(!numChar) {
      return;
    }
    if (numChar == NaN) {
      return;
    }
  var lowerCasePass = window.confirm("Would you like to include lower case letters?");
    if (lowerCasePass === true) {
      options = options.concat(lowerCase);
    }
  var upperCasePass = window.confirm("Would you like to include upper case letters?");
    if (upperCasePass === true) {
      options = options.concat(upperCase);
    }
  var numericPass = window.confirm("Would you like to include numbers?");
    if (numericPass === true) {
      options = options.concat(numerics);
    }
  var specialPass = window.confirm("Would you like to include special characters?")
    if (specialPass === true) {
      options = options.concat(specials);
    }

  var index = function() {
    finishedPassword = finishedPassword.concat(options[Math.floor(Math.random() * options.length)]);
  }
  //There's probably a more correct way to do this but this works so I'm keeping it
  for (i=0; i <= (numChar-1); i++) {
    index();
  }
  passwordText.value = finishedPassword;
} 

generateBtn.addEventListener("click", writePassword);