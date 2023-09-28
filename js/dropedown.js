// Get a reference to the dropdown element and location display div
const boothSelect = document.getElementById("boothSelect");
const locationDisplay = document.getElementById("locationDisplay");

// Define an object to store booth-location mappings
const boothLocations = {
  booth1: "Lusaka CPD",
  booth2: "Libala",
  booth3: "Kabwata",
  booth4: "Mandevu",
  booth5: "Woodlands",
  booth6: "Matero East",
  // We can add more booth-location mappings here later
};

// Add an event listener to the dropdown
boothSelect.addEventListener("change", function () {
  // Get the selected option value
  const selectedBooth = boothSelect.value;

  // Check if the selectedBooth exists in the boothLocations object
  if (boothLocations[selectedBooth]) {
    // Display the corresponding location
    locationDisplay.textContent = `Your selected booth is located in: ${boothLocations[selectedBooth]}`;
  } else {
    // If the selected booth is not found in boothLocations, display an error message
    locationDisplay.textContent = "Location not found";
  }
});
