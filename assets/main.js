// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Dynamic year
const yearEl = document.querySelectorAll('#year');
yearEl.forEach((el) => (el.textContent = new Date().getFullYear()));

// Resources: simple client-side search/filter
const searchInput = document.getElementById('resourceSearch');
const filterSelect = document.getElementById('resourceFilter');
const resourceGrid = document.getElementById('resourceGrid');

function filterResources() {
  if (!resourceGrid) return;
  const term = (searchInput?.value || '').toLowerCase().trim();
  const type = filterSelect?.value || 'all';
  const items = resourceGrid.querySelectorAll('.resource');

  items.forEach((item) => {
    const itemType = item.getAttribute('data-type') || '';
    const title = (item.getAttribute('data-title') || '').toLowerCase();
    const matchType = type === 'all' || itemType === type;
    const matchTerm = !term || title.includes(term);
    item.style.display = matchType && matchTerm ? '' : 'none';
  });
}

searchInput?.addEventListener('input', filterResources);
filterSelect?.addEventListener('change', filterResources);

// Contact form (no backend): friendly UX
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // If hosted on Netlify (or later connected to any form backend), remove preventDefault.
    e.preventDefault();
    formStatus.textContent = 'Thanks! Your message has been noted.';
    contactForm.reset();
    setTimeout(() => (formStatus.textContent = ''), 5000);
  });
}
