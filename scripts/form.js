const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductOptions() {
    const productSelect = document.getElementById('productName');
    if (!productSelect) return;

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

function updateReviewCounter() {
    const counterElement = document.getElementById('review-counter');
    if (!counterElement) return;
    
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    counterElement.textContent = reviewCount;
}

function setCurrentYear() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    setCurrentYear();
    
    if (document.querySelector('.confirmation-page')) {
        updateReviewCounter();
    }
});