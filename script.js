// Assignment code here
var generateBtn = document.querySelector("#generate");

// Values for characters in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lowerCase ="abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "123456789".split('');
var symbols= "!@#$%^&*()_+".split('');

//To render in the browser - convert the unicode
var emojiStringToArray = function (str) {
  split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  arr = [];
  for (var i=0; i<split.length; i++) {
    char = split[i]
    if (char !== "") {
      arr.push(char);
    }
  }
  return arr;
};

//assign function to emoji variable
emojis = emojiStringToArray("😴😄😃⛔🎠🚓🚇");

function writePassword() {
  // variables to hold password values
  var almostReady = [];
  var nowReady = "";
  // this var will hold the desired password length
  var length = prompt("How long would you like your password to be?\n8-128");
  if(length < 8 || length > 128) {
    alert("Your password must be between 8-128 characters")
    writePassword()
  } else {
    // if length is good, ask user what they would like included in password, confirm statements below
    if(confirm("Would you like uppercase letters in your password?")) {
      almostReady = almostReady.concat(upperCase);
    }
    if(confirm("Would you like lowercase letters in your password?")){
      almostReady = almostReady.concat(lowerCase);
    }
    if(confirm("Would you like numbers in your password?")){
      almostReady = almostReady.concat(numbers);
    }
    if(confirm("Would you like symbols to be in your password?")){
      almostReady = almostReady.concat(symbols);
    }
    if(confirm("Would you like emojis like '😴😄😃⛔🎠🚓🚇' to be in your password?")){
      almostReady = almostReady.concat(emojis);
    }
    if(almostReady.length === 0) {
      alert("You must have at least one character type in your password");
      writePassword()
      //randomize the outcome here
    } else {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * almostReady.length);
        nowReady += almostReady[random]
      }
    }
    //Pass the password into the element's text area
    document.getElementById("password").innerHTML = nowReady
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);