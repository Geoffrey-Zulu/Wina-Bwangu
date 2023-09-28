// Function to generate a random Transaction ID
function ID() {
    const prefix = "WB"; // Text prefix for the Transaction ID
    const minNumber = 1; // Minimum number value
    const maxNumber = 9999999; // Maximum number value (7 digits)

    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    // Create the Transaction ID by combining the prefix and random number
    const transactionID = `${prefix}${String(randomNumber).padStart(7, '0')}`;

    // Display the Transaction ID in the specified HTML element
    const generate = document.getElementById("ID");
    generate.innerHTML = "Transaction ID:" + transactionID;
}

