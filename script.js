// Buttons
const generateBtn = document.querySelector("#generate");
const clearBtn = document.querySelector('#clear');
const textArea = document.querySelector('#password');

// Function for Generating Password
function generatePassword() {

  // Characters
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

  
}