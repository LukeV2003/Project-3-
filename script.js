
// JavaScript Code for Light/Dark Mode and Dynamic Greeting

// Function to toggle between light mode and dark mode
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const isDarkMode = body.classList.toggle('dark-mode');

    themeToggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Function to display a dynamic greeting based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById('dynamic-greeting');
    const hours = new Date().getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = "Good Morning!";
    } else if (hours < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.textContent = `${greetingMessage} Welcome to my portfolio!`;
}

// Initialize functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.id = 'theme-toggle-btn';
    themeToggleBtn.textContent = 'Dark Mode';
    themeToggleBtn.style.position = 'fixed';
    themeToggleBtn.style.top = '10px';
    themeToggleBtn.style.right = '10px';
    themeToggleBtn.style.padding = '10px 20px';
    themeToggleBtn.style.cursor = 'pointer';
    themeToggleBtn.style.zIndex = 1000;

    themeToggleBtn.addEventListener('click', toggleTheme);

    document.body.appendChild(themeToggleBtn);

    displayGreeting();
});
