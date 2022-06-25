'use strict';

// Set up dark mode toggler
const root = document.getElementsByTagName('html')[0];
const button = document.getElementsByClassName('nav__toggle')[0];
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
  button.href = `#${savedTheme === 'dark' ? 'light' : 'dark'}`;
}

button.addEventListener('click', (event) => {
  event.preventDefault();

  const currentTheme = root.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.dataset.theme = newTheme;
  button.href = `#${currentTheme}`; // For showing in status bar
  localStorage.setItem('theme', newTheme);
});
