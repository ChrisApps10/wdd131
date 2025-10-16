const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

const allInventory = [
    { id: 1, make: 'Toyota', model: 'Sprinter Trueno AE86', year: 1983, image: 'toyota-ae86.jpg', description: 'A lightweight, rear-wheel-drive car that gained legendary status in drifting culture, famously driven by drift king Keiichi Tsuchiya. A true JDM Legend.' },
    { id: 2, make: 'Nissan', model: 'Skyline GT-R', year: 1999, image: 'nissan-gtr-r34.jpg', description: 'Nicknamed "Godzilla," the Skyline GT-R dominated Group A racing in Japan. Its twin-turbocharged inline-six RB26DETT engine is highly regarded for its tuning potential.' },
    { id: 3, make: 'Toyota', model: 'Supra Turbo', year: 1995, image: 'toyota-supra-mk4.jpg', description: 'Famous for its bulletproof 2JZ-GTE twin-turbo inline-six engine, the Mk IV Supra gained international stardom from movies and its incredible performance.' },
    { id: 4, make: 'Honda', model: 'NSX', year: 1992, image: 'honda-nsx.jpg', description: 'With a lightweight aluminum body and a mid-mounted V6 engine, the first-generation NSX challenged the supercar world by offering Ferrari performance with Honda reliability.' },
    { id: 5, make: 'Mazda', model: 'RX-7', year: 1993, image: 'mazda-rx7-fd.jpg', description: 'This car is celebrated for its lightweight chassis and unique twin-turbo rotary engine, providing an exceptional driving experience and perfect proportions.' },
    { id: 6, make: 'Honda', model: 'Civic Type R (EK9)', year: 1998, image: 'honda-civic-ek9.jpg', description: 'This lightweight, high-revving hatchback proved that accessible and affordable performance could be delivered in a front-wheel-drive package.' },
    { id: 7, make: 'Subaru', model: 'Impreza WRX STi (22B)', year: 1998, image: 'subaru-impreza-22b.jpg', description: 'Born from rally racing success, the Impreza WRX STi, particularly the rare 22B homologation special, is celebrated for its all-wheel-drive performance.' },
    { id: 8, make: 'Mitsubishi', model: 'Evolution III', year: 1995, image: 'mitsubishi-evo-3.jpg', description: 'Launched in February 1995, this legend came with significant improvements over its predecessors, including a more aggressive body kit for better aerodynamics and increased engine output.' },
    { id: 9, make: 'Nissan', model: 'Sileighty', year: 1998, image: 'nissan-sileighty.jpg', description: 'This hybrid was a response to street racers who often swapped Silvia front ends onto 180SXs. It featured performance upgrades like a new ECU, stiffer suspension, an upgraded limited-slip differential, and higher turbo boost pressure, increasing horsepower to around 230 hp.' },
    { id: 10, make: 'Toyota', model: 'Celica GT-4', year: 1994, image: 'toyota-gt-4.jpg', description: 'An important JDM legend, recognized for its rally racing pedigree, innovative engineering, and for paving the way for other successful Japanese rally cars. It was created as a homologation special, a road-going version built in limited numbers to qualify for the World Rally Championship (WRC).' },
];

document.addEventListener('DOMContentLoaded', () => {

    function renderFeaturedCars() {
        const featuredCars = [
            { id: 2, make: 'Nissan', model: 'Skyline GT-R (R34)', year: 1999, image: 'nissan-gtr-r34.jpg' },
            { id: 3, make: 'Toyota', model: 'Supra Turbo (MK4)', year: 1995, image: 'toyota-supra-mk4.jpg' },
            { id: 5, make: 'Mazda', model: 'RX-7 (FD)', year: 1993, image: 'mazda-rx7-fd.jpg' },
            { id: 4, make: 'Honda', model: 'NSX', year: 1992, image: 'honda-nsx.jpg'},
        ];

        const carousel = document.querySelector('.carousel');
        if (carousel) {
            carousel.innerHTML = featuredCars.map(car => `
                <div class="carousel-item">
                    <img class="lazy" data-src="images/${car.image}" alt="${car.make} ${car.model}">
                    <div class="car-details">
                        <h3>${car.year} ${car.make} ${car.model}</h3>
                    </div>
                </div>
            `).join('');
            lazyLoadImages();
        }
    }

    function toggleMobileNav() {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        navMenu.classList.toggle('is-active');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
    }

    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img.lazy');
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
                        observer.unobserve(lazyImage);
                    }
                });
            });
            lazyImages.forEach(image => observer.observe(image));
        } else {
            lazyImages.forEach(image => image.src = image.dataset.src);
        }
    }

    function handleContactForm(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const contactData = {};
        let isValid = true;

        for (const [key, value] of formData.entries()) {
            contactData[key] = value;
            if (!value) {
                isValid = false;
                alert(`Please fill out the ${key} field.`);
            }
        }

        if (isValid) {
            console.log('Form data submitted:', contactData);
            const confirmationMessage = `Thank you, ${contactData.name}! Your message has been sent.`;
            document.getElementById('form-message').textContent = confirmationMessage;
            
            const timestamp = new Date().toISOString();
            localStorage.setItem(`contact_${timestamp}`, JSON.stringify(contactData));
            
            form.reset();
        }
    }

    function renderInventory() {
        const inventoryGrid = document.querySelector('.inventory-grid');
        if (inventoryGrid) {
            inventoryGrid.innerHTML = allInventory.map(car => `
                <div class="car-card" data-car-model="${car.make} ${car.model}">
                    <img class="lazy" data-src="images/${car.image}" alt="${car.make} ${car.model}">
                    <div class="car-details">
                        <h3>${car.year} ${car.make} ${car.model}</h3>
                        <p>${car.description}</p>
                        <button class="inquire-button">Inquire about this car</button>
                    </div>
                </div>
            `).join('');
            lazyLoadImages();
        }
    }

    function setupInventoryClicks() {
        const inventoryGrid = document.querySelector('.inventory-grid');
        if (inventoryGrid) {
            inventoryGrid.addEventListener('click', (event) => {
                const inquireButton = event.target.closest('.inquire-button');
                if (inquireButton) {
                    const carCard = inquireButton.closest('.car-card');
                    if (carCard) {
                        const carModel = carCard.dataset.carModel;
                        window.location.href = `contact.html?carModel=${encodeURIComponent(carModel)}`;
                    }
                }
            });
        }
    }

    function setupContactFormDropdown() {
        const carModelSelect = document.getElementById('carModel');
        if (carModelSelect) {
            allInventory.forEach(car => {
                const option = document.createElement('option');
                option.value = `${car.make} ${car.model}`;
                option.textContent = `${car.make} ${car.model}`;
                carModelSelect.appendChild(option);
            });

            const urlParams = new URLSearchParams(window.location.search);
            const selectedCar = urlParams.get('carModel');
            if (selectedCar) {
                carModelSelect.value = selectedCar;
            }
        }
    }

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    if (document.querySelector('.inventory-grid')) {
        renderInventory();
        setupInventoryClicks();
    }

    if (document.querySelector('.carousel')) {
        renderFeaturedCars();
    }

    if (document.getElementById('carModel')) {
        setupContactFormDropdown();
    }
});
