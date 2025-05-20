
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

document.getElementById('toggle-dark').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Ciklična promena veličine fonta
let fontSizes = [1, 1.2, 0.9];
let fontIndex = 0;

document.getElementById('cycle-font').addEventListener('click', () => {
  fontIndex = (fontIndex + 1) % fontSizes.length;
  document.documentElement.style.fontSize = fontSizes[fontIndex] + 'em';
  localStorage.setItem('fontSizeLevel', fontSizes[fontIndex]);
});

// Učitaj veličinu iz memorije
let savedSize = parseFloat(localStorage.getItem('fontSizeLevel'));
if (savedSize) {
  document.documentElement.style.fontSize = savedSize + 'em';
  fontIndex = fontSizes.indexOf(savedSize) !== -1 ? fontSizes.indexOf(savedSize) : 0;
}

// Fade efekat
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
faders.forEach(el => observer.observe(el));
