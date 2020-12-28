// Buttons
const generateBtn = document.querySelector("#generate");
const clearBtn = document.querySelector("#clear");
let length = document.getElementById("slider");

// Areas on Main Screen
const textArea = document.querySelector("#password");

// Length
const output = document.getElementById("demo");
output.innerHTML = length.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
length.oninput = function () {
  output.innerHTML = this.value;
};

// Function for Generating Password
function generatePassword() {
  // Characters
  // const length = document.querySelector("length").value;
  const upperCharacter = document.querySelector("#upperCase");
  const lowerCharacter = document.querySelector("#lowerCase");
  const numbers = document.querySelector("#numbers");
  const special = document.querySelector("#special");
  
  // Character Array
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = lowercaseLetters.toUpperCase();
  const symbol = "!@#$%^&*()_+";
  const numbs = "0123456789";
  
  var character = "";
  
  // Checks to see what buttons the user has pressed
  
  // Upper Case Letters
  if (upperCharacter.checked) {
    character += upperLetters;
  }
  // Lower Case Letters
  if (lowerCharacter.checked) {
    character += lowercaseLetters;
  }
  
  // Numbers
  if (numbers.checked) {
    character += numbs;
  }
  
  // Special Characters
  if (special.checked) {
    character += symbol;
  }
  
  // Prompt For User to Double Check Button Pressing
  if (character === "") {
    alert("Please choose options for your password");
  } else {
    let password = "";
    
    // For Loop
    for (var i = 0; i < length.value; i++) {
      password = password + character.charAt(Math.floor(Math.random() * character.length - 1));
      // const randonNumber = Math.floor(Math.random() * character.length);
      
      
      
      // password += character.charAt(randonNumber);
    }
    console.log(password);
    document.querySelector("#password").value = password;
  }
  
}

function clearPassword () {
  console.log("hello")
  document.querySelector("#password").value = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
clearBtn.addEventListener("click", clearPassword);