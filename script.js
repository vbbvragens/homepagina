// script.js

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const sections = document.querySelectorAll('section');
const h2s = document.querySelectorAll('h2');
const h3s = document.querySelectorAll('h3');
const buttons = document.querySelectorAll('button');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    h2s.forEach(h2 => h2.classList.toggle('dark-mode'));
    h3s.forEach(h3 => h3.classList.toggle('dark-mode'));
    buttons.forEach(button => button.classList.toggle('dark-mode'));

    // Buton metnini güncelle
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
