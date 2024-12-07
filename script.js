// Select elements
const characterGrid = document.querySelector('.character-grid');
const characters = [
  {
    name: 'Hello Kitty',
    img: 'Assets/hellokitty.png',
    desc: 'The iconic Sanrio character known for her kindness and charm.',
  },
  {
    name: 'My Melody',
    img: 'Assets/MyMelody.png',
    desc: 'A sweet bunny who loves helping her friends.',
  },
  {
    name: 'Kuromi',
    img: 'Assets/Kuromi.webp',
    desc: 'A mischievous and sassy rival of My Melody.',
  },
  {
    name: 'Cinnamoroll',
    img: 'Assets/Cinnamoroll.png',
    desc: 'A cheerful puppy who flies through the sky with his big ears.',
  },
  {
    name: 'Pompompurin',
    img: 'Assets/Pompompurin.png',
    desc: 'A golden retriever with a laid-back attitude and love for pudding.',
  },
  {
    name: 'Badtz-Maru',
    img: 'Assets/BadtzMaru.png',
    desc: 'A mischievous penguin with a rebellious streak.',
  },
];

let currentIndex = 0;

// Function to render characters dynamically
function renderCharacters() {
  const leftIndex = (currentIndex - 1 + characters.length) % characters.length;
  const rightIndex = (currentIndex + 1) % characters.length;

  // Fetch all card elements
  const cards = characterGrid.querySelectorAll('.character-card');

  // Update left card
  updateCard(cards[0], characters[leftIndex], 'left');

  // Update center card
  updateCard(cards[1], characters[currentIndex], 'center');

  // Update right card
  updateCard(cards[2], characters[rightIndex], 'right');
}

// Function to update a specific card
function updateCard(card, character, position) {
  card.className = `character-card ${position}`; // Reset and set position class
  card.innerHTML = `
    <img src="${character.img}" alt="${character.name}">
    <h3>${character.name}</h3>
    <p>${character.desc}</p>
  `;
}

// Add transition effect and navigation logic
function addTransition(direction) {
  characterGrid.classList.add(`transition-${direction}`);
  setTimeout(() => {
    characterGrid.classList.remove(`transition-${direction}`);
    renderCharacters(); // Update characters after transition
  }, 500); // Match the CSS animation duration
}

// Move to the left character
function moveLeft() {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  addTransition('left');
}

// Move to the right character
function moveRight() {
  currentIndex = (currentIndex + 1) % characters.length;
  addTransition('right');
}

// Add event listeners to cards for navigation
characterGrid.addEventListener('click', (e) => {
  const target = e.target.closest('.character-card');
  if (target.classList.contains('left')) moveLeft();
  if (target.classList.contains('right')) moveRight();
});

// Initial render
renderCharacters();
