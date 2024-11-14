const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

