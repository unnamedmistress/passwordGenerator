// Assignment code here
var generateBtn = document.querySelector("#generate");

// Values for characters in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lowerCase ="abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "123456789".split('');
var symbols= "!@#$%^&*()_+".split('');
var emojis = "©®℗№⁜⌂◓◪∞⊗②⑥⫷".split('');



function writePassword() {
  // variables to hold password values
  var preReady = [];
  var postReady = "";
  // this var will hold the desired length
  var length = prompt("How long would you like your password to be?\n8-128");
  if(length < 8 || length > 128) {
    alert("Your password must be between 8-128 characters")
    writePassword()
  } else {
    // if length is good, ask user what they would like included in password
    if(confirm("Would you like uppercase letters in your password?")) {
      preReady = preReady.concat(upperCase);
    }
    if(confirm("Would you like lowercase letters in your password?")){
      preReady = preReady.concat(lowerCase);
    }
    if(confirm("Would you like numbers in your password?")){
      preReady = preReady.concat(numbers);
    }
    if(confirm("Would you like symbols to be in your password?")){
      preReady = preReady.concat(symbols);
    }
    if(confirm("Would you like emojis like '©®℗№⁜⌂◓◪∞⊗②⑥⫷' to be in your password?")){
      preReady = preReady.concat(emojis);
    }
    if(preReady.length === 0) {
      alert("You must have at least one character type in your password");
      writePassword()
    } else {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * preReady.length);
        postReady += preReady[random]
      }
    }
    document.getElementById("password").innerHTML = postReady
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);