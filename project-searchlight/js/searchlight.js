// Searchlight.js

// Pop-up menus for About, Settings
const aboutButton = document.getElementById('about-button');
const settingsButton = document.getElementById('settings-button');
const tutorialButton = document.getElementById('tutorial-button');
const aboutModal = document.getElementById('about-popup');
const settingsModal = document.getElementById('settings-popup');
const tutorialModal = document.getElementById('tutorial-popup');
const aboutCloseButton = document.getElementById('about-close');
const settingsCloseButton = document.getElementById('settings-close');
const tutorialCloseButton = document.getElementById('tutorial-close');

function showAboutModal() {
    aboutModal.style.display = 'flex';
}
  
function showSettingsModal() {
    settingsModal.style.display = 'flex';
}

function showTutorialModal() {
    tutorialModal.style.display = 'flex';
}
  
  function hideAboutModal() {
    aboutModal.style.display = 'none';
}
  
function hideSettingsModal() {
    settingsModal.style.display = 'none';
}

function hideTutorialModal() {
    tutorialModal.style.display = 'none';
}

aboutButton.addEventListener('click', showAboutModal);
settingsButton.addEventListener('click', showSettingsModal);
tutorialButton.addEventListener('click', showTutorialModal);
aboutCloseButton.addEventListener('click', hideAboutModal);
settingsCloseButton.addEventListener('click', hideSettingsModal);
tutorialCloseButton.addEventListener('click', hideTutorialModal);

// Start typing in searchbox, hide searchbox-helpers button
const searchBox = document.querySelector('.search-input');
const searchContainer = document.querySelector('.search-container');
const tutorialBtn = document.querySelector('.searchbox-helpers');
const headerBar = document.querySelector('.header');

searchBox.addEventListener('input', function() {
  if (searchBox.value.length > 0) {
    searchContainer.classList.add('active');
  } else {
    searchContainer.classList.remove('active');
  }
});

searchBox.addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
      tutorialBtn.classList.remove('hide');
    } else {
      tutorialBtn.classList.add('hide');
    }
});

// Query tiles and results when you start typing
const queryTiles = document.querySelector('.query-tiles');
const searchResults = document.querySelector('.query-results');

queryTiles.addEventListener('click', function(event) {
  if (event.target.classList.contains('query-tile')) {
    searchBox.value = event.target.textContent;
    searchBox.focus();
  }
});