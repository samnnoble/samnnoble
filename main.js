/ Author: Sam Noble
// Date: 5/7/24
// Assignment: Project 1 - Complete AFTER Final Topic Discussion
// Course: CIS166AA 26678

// Function form submission
function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // form data
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    // Process the form data (send an email)
    console.log("Contact Form Data Received:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Message: ");

    // Loop over each character in the message
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
}

document.getElementById("contactForm").addEventListener("submit", handleFormSubmission);

// Listen for Enter key press 
document.getElementById("name").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("contactForm").submit();
    }
});

document.getElementById("email").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("contactForm").submit();
    }
});

document.getElementById("phone").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("contactForm").submit();
    }
});

document.getElementById("message").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("contactForm").submit();
    }
});

