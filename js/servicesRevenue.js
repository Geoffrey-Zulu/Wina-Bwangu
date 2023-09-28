// JavaScript code to populate services and display revenue
document.addEventListener("DOMContentLoaded", function () {
    // Sample data for services and revenue (you can replace this with actual data)
    const serviceData = {
        booth1: ["Airtel Money", "Mtn Money", "Zamtel Money", "Zanaco", "FNB"],
        booth2: ["Airtel Money", "Mtn Money", "Zamtel Money", "FNB"],
        booth3: ["Airtel Money", "Mtn Money", "Zamtel Money", "Zanaco", "FNB"],
        booth4: ["Airtel Money", "Mtn Money", "Zamtel Money"],
        booth5: ["Airtel Money", "Mtn Money", "Zanaco", "FNB"],
        booth6: ["Airtel Money", "Mtn Money", "Zamtel Money"]
    };

    // Sample revenue data (you can replace this with actual data)
    const revenueData = {
        "Airtel Money": "0.5",
        "Mtn Money": "0.06",
        "Zamtel Money": "0.045",
        "Zanaco": "0.035",
        "FNB": "0.04"
        // Add more services and their corresponding revenue values here
    };

    // Get references to the select element and revenue display div
    const serviceSelect = document.getElementById("serviceSelect");
    const revenueDisplay = document.getElementById("revenueDisplay");

    // Function to populate service options based on the selected booth
    function populateServices() {
        const selectedBooth = document.getElementById("boothSelect").value;
        serviceSelect.innerHTML = ""; // Clear existing options

        // Populate options based on the selected booth
        serviceData[selectedBooth].forEach(service => {
            const option = document.createElement("option");
            option.value = service;
            option.textContent = service;
            serviceSelect.appendChild(option);
        });

        // Update revenue when booth selection changes
        updateRevenue();
    }

    // Event listener to update services and revenue when booth selection changes
    document.getElementById("boothSelect").addEventListener("change", () => {
        populateServices();
    });

    // Event listener to update revenue when service selection changes
    document.getElementById("serviceSelect").addEventListener("change", () => {
        updateRevenue();
    });

    // Function to display revenue for the selected service
    function updateRevenue() {
        const selectedService = serviceSelect.value;

        if (revenueData.hasOwnProperty(selectedService)) {
            revenueDisplay.textContent = `Revenue Per Kwacha: ${revenueData[selectedService]}`;
        } else {
            revenueDisplay.textContent = "Revenue data not available for this service.";
        }
    }
    // Initial population of services and revenue
    populateServices();
});
