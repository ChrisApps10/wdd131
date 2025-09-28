const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation-menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});