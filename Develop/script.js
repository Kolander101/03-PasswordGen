// Assignment Code
var generateBtn = document.querySelector("#generate");
var UCletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lcletters = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sc ="#$%&'()*+,-./:;<=>?@[]^_`{|";
var chalength = 8;
var all ="";
var generateBtn = document.querySelector("#generate")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function Prompt{
  chalength= window.prompt("How many characters would you like your password to be?(Min 8-128 characters)"));
  if (chalength < 8 || chalength > 128){
    alert("Length of characters must be a digit between 8-128. Try again");
  }

  if (confirm("Would you like Uppercase letters in your password?"))
  var UCletters= UCletters.concat

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
