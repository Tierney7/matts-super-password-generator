//variables 
var password = [];
var lowerL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [1,2,3,4,5,6,7,8,9, 0];
var symbol = ["!","@","#","$","%","^","&","*","=","-","_","~","+","-"];

var generateBtn = document.querySelector("#generate");
var selection = [];

//password function 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}

// event listener
generateBtn.addEventListener("click", writePassword);

//user prompts 
function generatePassword () {
  characterAmount = (prompt ("Please select how long you would like your password to be. Between 8 and 128 characters "));
  //Alert for no number
  if (!characterAmount) {
    alert ("Please input a number");
    //Alert for too low or too high
  } else if (characterAmount < 8 || characterAmount > 128) {
  alert("Please choose between 8 and 128 characters.");
  } else {
    //prompts for which characters they would like password to be made up of 
    passNumber = confirm("Would you like numbers in your password?");
    passSymbol = confirm("Would you like symbols in your password?");
    passUpper = confirm("Would you like upper case letters in your password?");
    passLower = confirm("Would you like lower case letters in your password?");
  
  //character options 
  if (passNumber) {
  selection = selection.concat(number);
  }
  if (passSymbol) {
  selection = selection.concat(symbol);
  }
  if (passUpper) {
  selection = selection.concat(upperL);
  }
  if (passLower) {
  selection = selection.concat(lowerL);
  }};

  //Loop to generate password 
  for (var i = 0; i < characterAmount; i++) {
  var j = selection[Math.floor(Math.random() * selection.length)];
  password.push(j);
  }
  password = password.join("");
  return password;
}
