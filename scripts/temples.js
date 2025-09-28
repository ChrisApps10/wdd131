// Get the current year for the footer
const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Get the last modified date for the footer
const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

// Hamburger menu functionality
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation-menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});