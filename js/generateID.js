// Add an event listener to the button element
document.getElementById("generateTransactionID").addEventListener("click", function () {
    // Call the generateTransactionID function when the button is clicked
    const transactionID = generateTransactionID();
    // Display the generated ID in the input field or any other desired location
    document.getElementById("transactionID").value = transactionID;
  });
  
// Function to generate a random Transaction ID
function generateTransactionID() {
    const prefix = "WB"; // Text prefix for the Transaction ID
    const minNumber = 1; // Minimum number value
    const maxNumber = 9999999; // Maximum number value (7 digits)
    
    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  
    // Create the Transaction ID by combining the prefix and random number
    const transactionID = `${prefix}${String(randomNumber).padStart(7, '0')}`;
  
    return transactionID;
  }
  
  // Example usage:
  const transactionID = generateTransactionID();
  console.log(transactionID); // Output will be something like "WB0001234"
  