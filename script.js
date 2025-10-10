// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('siteNav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    hamburger.setAttribute('aria-expanded', String(!open));
  });
}

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
