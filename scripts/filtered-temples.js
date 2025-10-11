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

const temples = [
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11-14",
        area: 190614,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/320x200/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25-30",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/320x200/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Peru Lima",
        location: "Peru, Lima",
        dedicated: "1986, January, 10-12",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/320x200/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Oakland California",
        location: "Manti, Utah, United States",
        dedicated: "1964, November, 17-19",
        area: 80157,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/320x200/05-Oakland-Temple-Exterior-2236263.jpg"
    },
    {
        templeName: "Newport Beach California",
        location: "Manti, Utah, United States",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/320x200/newport-beach-california-temple-1169298-wallpaper.jpg"
    },
    {
        templeName: "San Salvador El Salvador",
        location: "Manti, Utah, United States",
        dedicated: "2011, August, 21",
        area: 27986,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/320x200/san-salvador-el-salvador-temple-lds-848573-wallpaper.jpg"
    },
    {
        templeName: "Manhattan New York",
        location: "Manhattan, New York, United States",
        dedicated: "2004, June, 13",
        area: 20630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/320x200/manhattan-temple-lds-246601-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27-29",
        area: 53997,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2-4",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/320x200/mexico-city-temple-exterior-1518357-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14-16",
        area: 11610,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/200x320/guatemala-lds-temple-82739-wallpaper.jpg"
    },
    {
        templeName: "Sacramento California",
        location: "Sacramento, California, United States",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/320x200/sacramento-temple-769989-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27-30",
        area: 42100,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/320x200/laie-temple-775370-wallpaper.jpg"
    },
];

function createTempleCards(filteredTemples) {
    const container = document.getElementById('temple-cards-container');
    container.innerHTML = ''; // Clear existing cards
    filteredTemples.forEach(temple => {
        const card = document.createElement('figure');
        // Add classes and other attributes as needed
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all temples
    createTempleCards(temples);

    // Event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            let filteredTemples = [];

            if (filter === 'home') {
                filteredTemples = temples;
            } else if (filter === 'old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            }
            // Add more conditions for 'new', 'large', and 'small'
            
            createTempleCards(filteredTemples);
        });
    });
});
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;