// Dynamic Footer Content
const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;

// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    // Formula for Imperial units (°F, mph)
    // Formula source: National Weather Service
    // 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    } else {
        return "N/A"; // Return N/A if conditions are not met
    }
}

const temperature = 45; // °F
const windSpeed = 5;    // mph

const windChillElement = document.getElementById("windchill");
const windChill = calculateWindChill(temperature, windSpeed);

windChillElement.textContent = windChill;