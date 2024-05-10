let slideIndex = 0;
let isFirstClick = true;

function showSlides() {
    try {
        const slides = document.getElementsByClassName("mySlides");
        if (!slides || slides.length === 0) {
            throw new Error("No slides found");
        }
        
        for (let slide of slides) {
            slide.style.display = "none";
        }
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";

        if (isFirstClick) {
            alert("Following images photographed by Sam Noble");
            isFirstClick = false;
        }

        setTimeout(showSlides, 2000); // Fixed time interval for demonstration
    } catch (error) {
        console.error("Error in showSlides:", error.message);
    }
}

function plusSlides(n) {
    try {
        showSlides(slideIndex += n);
    } catch (error) {
        console.error("Error in plusSlides:", error.message);
    }
}

function handleKeyPress(event) {
    try {
        if (event.keyCode === 37) { // Left arrow key
            plusSlides(-1); // Move to previous slide
        } else if (event.keyCode === 39) { // Right arrow key
            plusSlides(1); // Move to next slide
        }
    } catch (error) {
        console.error("Error in handleKeyPress:", error.message);
    }
}

document.addEventListener("keydown", handleKeyPress);

showSlides();
