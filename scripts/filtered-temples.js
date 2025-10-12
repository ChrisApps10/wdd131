const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

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

const mainContainer = document.querySelector('.temple-grid');

const createTempleCard = (temple) => {
    const card = document.createElement('section');
    card.classList.add('temple-card');

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    details.appendChild(name);
    details.appendChild(location);
    details.appendChild(dedicated);
    details.appendChild(area);

    card.appendChild(image);
    card.appendChild(details);

    return card;
};

const displayTemples = (filteredTemples) => {
    mainContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        mainContainer.appendChild(createTempleCard(temple));
    });
};

document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const filter = event.target.id;
        let filteredTemples = [];

        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'home':
            default:
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
});