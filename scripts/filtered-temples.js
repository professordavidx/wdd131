// Dynamic Year and Last Modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
  `Last Modification: ${document.lastModified}`;

// Hamburger Menu Toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('open');
});

// Temples array
const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  // Add more temple objects here...
  {
    templeName: 'Barranquilla Colombia',
    location: 'Barranquilla, Colombia',
    dedicated: '2016, February, 20',
    area: 25349,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg',
  },
  {
    templeName: 'Panama City Panama',
    location: 'Panama City, Panama',
    dedicated: '2008, August, 10',
    area: 18943,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg',
  },
  {
    templeName: 'Fukuoka Japan',
    location: 'Fukuoka, Japan',
    dedicated: '2000, June, 11',
    area: 10700,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg',
  },
];

// Select gallery container
const gallery = document.querySelector('.gallery');

// Function to create a temple card
function createTempleCard(temple, index) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  img.width = 400; // actual image width
  img.height = 250; // actual image height

  figure.appendChild(img);

  const figcaption = document.createElement('figcaption');
  figcaption.innerHTML = `
  <div class="temple-name">${temple.templeName}</div>
  <div class="temple-info">Location: ${temple.location}</div>
  <div class="temple-info">Dedicated: ${temple.dedicated}</div>
  <div class="temple-info">Area: ${temple.area.toLocaleString()} sq ft</div>
`;
  figure.appendChild(figcaption);

  gallery.appendChild(figure);
}

// Function to display temples based on filter
function displayTemples(filter = 'Home') {
  gallery.innerHTML = ''; // Clear gallery

  let filteredTemples = temples;

  switch (filter) {
    case 'Old':
      filteredTemples = temples.filter(
        (t) => new Date(t.dedicated).getFullYear() < 1900,
      );
      break;
    case 'New':
      filteredTemples = temples.filter(
        (t) => new Date(t.dedicated).getFullYear() > 2000,
      );
      break;
    case 'Large':
      filteredTemples = temples.filter((t) => t.area > 90000);
      break;
    case 'Small':
      filteredTemples = temples.filter((t) => t.area < 10000);
      break;
    case 'Home':
    default:
      filteredTemples = temples;
  }

  filteredTemples.forEach(createTempleCard);
}

// Initial display
displayTemples();

// Navigation buttons filter
const navLinks = document.querySelectorAll('.navigation li a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    const filter = link.textContent.trim();
    displayTemples(filter);
  });
});
