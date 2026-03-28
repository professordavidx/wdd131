document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
  `Last Modification: ${document.lastModified}`;

// Product array
const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    averagerating: 4.5,
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    averagerating: 4.7,
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    averagerating: 3.5,
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    averagerating: 3.9,
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    averagerating: 5.0,
  },
];

// Populate the product select dynamically
const productSelect = document.getElementById('product');
products.forEach((product) => {
  const option = document.createElement('option');
  option.value = product.id; // ID as value
  option.textContent = product.name;
  productSelect.appendChild(option);
});

const reviewForm = document.getElementById('reviewForm');

reviewForm.addEventListener('submit', (e) => {
  // Prevent immediate submission
  e.preventDefault();

  // Get current count from localStorage
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

  // Increment
  reviewCount += 1;

  // Save back to localStorage (creates it if doesn't exist)
  localStorage.setItem('reviewCount', reviewCount);

  // Now submit the form
  reviewForm.submit();
});
