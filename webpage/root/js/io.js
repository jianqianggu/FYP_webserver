// Array to store slider values
var sliderValues = [];

// Function to handle slider value changes
function handleSliderChange() {
    // Get all the slider elements
    var sliders = document.querySelectorAll('input[type="checkbox"]');

    // Clear the array
    sliderValues = [];

    // Loop through the sliders and store their values in the array
    sliders.forEach(function (slider) {
        sliderValues.push(slider.checked ? 1 : 0);
    });

    // Display the array as text
    var arrayText = document.getElementById('arrayText');
    arrayText.textContent = sliderValues.join(', ');
}

// Attach the handleSliderChange function to the change event of each slider
var sliders = document.querySelectorAll('input[type="checkbox"]');
sliders.forEach(function (slider) {
    slider.addEventListener('change', handleSliderChange);
});