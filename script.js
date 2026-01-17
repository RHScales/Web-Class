// JavaScript for Web Class Project

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const clickButton = document.getElementById('clickMe');
    const messageElement = document.getElementById('message');

    // Add click event listener to the button
    clickButton.addEventListener('click', function() {
        // Change the message when button is clicked
        messageElement.textContent = 'Hello! Thanks for clicking the button!';
        messageElement.style.color = '#27ae60';
        messageElement.style.fontWeight = 'bold';

        // Add some animation
        messageElement.style.transition = 'all 0.3s';
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 50);
    });

    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add some console logging for learning purposes
    console.log('Web Class Project loaded successfully!');
    console.log('This is your first JavaScript code in action!');
});