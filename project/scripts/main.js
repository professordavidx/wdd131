const styles = [
  {
    name: 'Portrait',
    description: 'Focuses on capturing people and expressions.',
    imageSmall: 'images/portrait-small.webp',
    imageMedium: 'images/portrait-medium.webp',
  },
  {
    name: 'Landscape',
    description: 'Captures nature and outdoor scenery.',
    imageSmall: 'images/landscape-small.webp',
    imageMedium: 'images/landscape-medium.webp',
  },
  {
    name: 'Street',
    description: 'Shows everyday life in public places.',
    imageSmall: 'images/street-small.webp',
    imageMedium: 'images/street-medium.webp',
  },
];

function displayStyles() {
  const container = document.getElementById('styles-container');
  if (!container) return;

  container.innerHTML = styles
    .map(
      (style) => `
    <div class="card">
      <h3>${style.name}</h3>
      <img 
        src="${style.imageSmall}" 
        srcset="${style.imageSmall} 300w, ${style.imageMedium} 500w"
        sizes="(max-width: 768px) 100vw, 300px"
        alt="${style.name} photography"
        loading="lazy">
      <p>${style.description}</p>
      <button onclick="saveFavorite('${style.name}')">Save</button>
    </div>
  `,
    )
    .join('');
}

function saveFavorite(styleName) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (!favorites.includes(styleName)) {
    favorites.push(styleName);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));

  loadFavorites();
  updateFavoriteCount();
}

function loadFavorites() {
  const list = document.getElementById('favorites');
  if (!list) return;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  list.innerHTML = favorites.map((f) => `<li>${f}</li>`).join('');
}

function updateFavoriteCount() {
  const count = JSON.parse(localStorage.getItem('favorites')) || [];
  const counter = document.getElementById('favorite-count');

  if (counter) {
    counter.textContent = `You have ${count.length} favorite style(s).`;
  }
}

const clearBtn = document.getElementById('clear-btn');

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('favorites');
    loadFavorites();
    updateFavoriteCount();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayStyles();
  loadFavorites();
  updateFavoriteCount();
  setActiveNav();
});

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const messageBox = document.getElementById('form-message');

    if (name.trim() === '') {
      messageBox.textContent = 'Please enter your name.';
    } else {
      messageBox.textContent = `Thanks, ${name}! Your message has been sent.`;
      form.reset();
    }
  });
}

function setActiveNav() {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}
