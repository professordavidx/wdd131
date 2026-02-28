// Dynamically set the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically set the last modified date
document.getElementById('lastModified').textContent =
  `Last Modification: ${document.lastModified}`;
