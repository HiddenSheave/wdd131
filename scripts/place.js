const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

function calculateWindChill (temperature, windSpeed) {
    return 13.12 + 0.625 * temperature - 11.37 * Math.pow(windSpeed, 0.16);
}
window.addEventListener('load', displayWindChill);
function displayWindChill () {
    const temperature = 6;
    const windSpeed = 5;

    const windChill = calculateWindChill (temperature, windSpeed);

    const windChillElement = document.getElementById("windchill");
    if(windChillElement) {
        windChillElement.textContent = `${windChill.toFixed(1)}°C`
    }
}
