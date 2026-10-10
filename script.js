// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Carte Google chargée uniquement sur clic (pas de cookies tiers sans action du visiteur)
const mapBtn = document.querySelector('.map-load');
if (mapBtn) {
  mapBtn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps?q=10+rue+Louis+Pasteur,+85430+Aubigny-Les+Clouzeaux&output=embed';
    iframe.title = 'Carte : 10 rue Louis Pasteur, Aubigny-Les Clouzeaux';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    document.getElementById('map').replaceChildren(iframe);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
