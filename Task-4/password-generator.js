// Import the generate-password module
const generatePassword = require("generate-password");

// Function to generate a random password
function generateRandomPassword() {
  // Configuration options for the password
  const passwordOptions = {
    length: 12, // Set the length of the password
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase letters in the password
    lowercase: true, // Include lowercase letters in the password
  };

  // Generate the password using the generate-password module
  const password = generatePassword.generate(passwordOptions);

  // Log the generated password to the console
  console.log("Generated Password:", password);
}

// Call the function to generate and log a random password
generateRandomPassword();
