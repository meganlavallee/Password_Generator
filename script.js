// Buttons
const generateBtn = document.querySelector("#generate");
const clearBtn = document.querySelector('#clear');
const textArea = document.querySelector('#password');

// Function for Generating Password
function generatePassword() {

  // Characters
  const length = document.querySelector("length").value;
  const upperCharacter = document.querySelector("#upperCase");
  const lowerCharacter = document.querySelector("#lowerCase");
  const numbers = document.querySelector("#numbers");
  const symbols = document.querySelector("#symbols");
  
  // Character Array
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = lowercaseLetters.toUpperCase();
  const special = "!@#$%^&*()_+";
  const numbs = "0123456789";

  let character = "";

  // Checks to see what buttons the user has pressed

  // Upper Case Letters
  if (upperCharacter.checked) {
    character += upperLetters;
  }
  // Lower Case Letters
  if (lowerCharacter.checked) {
    character += lowerCaseLetters;
  }

  // Numbers
  if (numbers.checked) {
    character += numbs;
  }

  // Special Characters
  if (symbols.checked) {
    character += special;
  }

// For Loop
for (let i = 0; i < length; i++) {
  const randonNumber = Math.floor(Math.random() * character.length);
  
  password += character.charAt(randonNumber);
  console.log(password);
}

document.querySelector("#password").textContent = password;
}

// Length
let length = document.getElementById("length");
const output = document.getElementById("demo");
// output.innerHTML = length.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// length.oninput = function () {
  output.innerHTML = this.value;
// };

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);