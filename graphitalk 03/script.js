// toggle bar
let navbarToggle = document.getElementById("navbar-toggle");
// icon bars
let iconBars = document.getElementById("icon-bars");
// icon x
let iconX = document.getElementById("icon-x");

// login signup btn
let loginSignup = document.getElementById("loginSignup");
// nav links
let navLinks = document.getElementById("nav-links");



// Add click event listener to the navbar toggle button
navbarToggle.addEventListener("click", function() {
    // Check if the navbar is hidden or not
    if (nav.style.display === "none" || nav.style.display === "") {
      // If the navbar is hidden, show it
      nav.style.display = "block"; // Display the navbar
      iconBars.style.display = "none"; // Hide the "hamburger" icon
      iconX.style.display = "inline"; // Show the "X" icon
    } else {
      // If the navbar is shown, hide it
      nav.style.display = "none"; // Hide the navbar
      iconBars.style.display = "inline"; // Show the "hamburger" icon
      iconX.style.display = "none"; // Hide the "X" icon
    }
  });


