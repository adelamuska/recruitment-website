let currentSlide = 0; // Initial slide index

function showSlide(slideIndex) {
    const slides = document.querySelectorAll(".slider-images .slide"); // This now matches the HTML

    // Log number of slides for debugging
    console.log("Number of slides:", slides.length);

    // Ensure there are slides to work with
    if (slides.length === 0) {
        console.warn("No slides found. Check HTML structure and class names.");
        return;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Loop slides if out of bounds
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to last slide if below 0
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Go to first slide if above max index
    }

    // Show the current slide
    slides[currentSlide].style.display = "block"; // Show the current slide
    console.log(`Showing slide ${currentSlide}`);
}

// Initialize slider by displaying the first slide
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed. Initializing slider...");
    showSlide(currentSlide);
});


function changeSlide(step) {
    currentSlide += step; // Update the current slide index
    showSlide(currentSlide); // Show the updated slide

    // Print the updated slide index to the console
    console.log(`Slide changed to ${currentSlide}`);
}

