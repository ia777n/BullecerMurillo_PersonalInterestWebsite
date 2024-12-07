// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Select elements
  const characterGrid = document.querySelector('.character-grid');
  const characters = [
    {
      name: 'Hello Kitty',
      img: 'Assets/hellokitty.png',
      desc: 'The iconic Sanrio character known for her kindness and charm.',
      details: {
        givenName: 'Baking cookies, making friends',
        dateOfBirth: 'November 1, 1974',
        birthPlace: 'London, England',
        sex: 'Female',
      },
    },
    {
      name: 'My Melody',
      img: 'Assets/MyMelody.png',
      desc: 'A sweet bunny who loves helping her friends.',
      details: {
        givenName: 'Sewing, spending time with her grandma',
        dateOfBirth: 'January 18',
        birthPlace: 'Mariland',
        sex: 'Female',
      },
    },
    {
      name: 'Kuromi',
      img: 'Assets/Kuromi.png',
      desc: 'A mischievous and sassy rival of My Melody.',
      details: {
        givenName: 'Writing in her diary, pulling pranks',
        dateOfBirth: 'October 31',
        birthPlace: 'Unknown',
        sex: 'Female',
      },
    },
    {
      name: 'Cinnamoroll',
      img: 'Assets/Cinnamoroll.png',
      desc: 'A cheerful puppy who flies through the sky with his big ears.',
      details: {
        givenName: 'Cloud-watching, flying',
        dateOfBirth: 'March 6, 2002',
        birthPlace: 'A cloud in the sky',
        sex: 'Male',
      },
    },
    {
      name: 'Pompompurin',
      img: 'Assets/Pompompurin.png',
      desc: 'A golden retriever with a laid-back attitude and love for pudding.',
      details: {
        givenName: 'Napping, collecting shoes',
        dateOfBirth: 'April 16',
        birthPlace: 'A house with a brown roof',
        sex: 'Male',
      },
    },
    {
      name: 'Badtz-Maru',
      img: 'Assets/BadtzMaru.png',
      desc: 'A mischievous penguin with a rebellious streak.',
      details: {
        givenName: 'Collecting fish bones, dreaming of ruling the world',
        dateOfBirth: 'April 1',
        birthPlace: 'Oahu, Hawaii',
        sex: 'Male',
      },
    },
    {
      name: 'Pochacco',
      img: 'Assets/Pochacco.png',
      desc: 'A curious and playful puppy who loves adventures.',
      details: {
        givenName: 'Playing basketball, taking long walks',
        dateOfBirth: 'February 29',
        birthPlace: 'Fuji, Japan',
        sex: 'Male',
      },
    },
    {
      name: 'Chococat',
      img: 'Assets/Chococat.png',
      desc: 'A curious cat with a love for gadgets.',
      details: {
        givenName: 'Inventing gadgets, solving mysteries',
        dateOfBirth: 'May 10',
        birthPlace: 'Kitty City',
        sex: 'Male',
      },
    },
    {
      name: 'Gudetama',
      img: 'Assets/Gudetama.png',
      desc: 'A lazy egg who prefers to do nothing.',
      details: {
        givenName: 'Sleeping, being lazy',
        dateOfBirth: 'No specific date',
        birthPlace: 'A refrigerator',
        sex: 'Unknown',
      },
    },
    {
      name: 'Keroppi',
      img: 'Assets/Keroppi.png',
      desc: 'A cheerful frog who loves singing and swimming.',
      details: {
        givenName: 'Playing games, singing',
        dateOfBirth: 'July 10',
        birthPlace: 'Donut Pond',
        sex: 'Male',
      },
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
      <div class="details">
        <p><strong>Hobbies:</strong> ${character.details.givenName}</p>
        <p><strong>Date of Birth:</strong> ${character.details.dateOfBirth}</p>
        <p><strong>Birthplace:</strong> ${character.details.birthPlace}</p>
        <p><strong>Sex:</strong> ${character.details.sex}</p>
      </div>
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
  
  // Add click-to-expand feature
  characterGrid.addEventListener('click', (e) => {
    const target = e.target.closest('.character-card');
  
    if (target.classList.contains('left')) moveLeft();
    if (target.classList.contains('right')) moveRight();
  
    if (target.classList.contains('center')) {
      // Toggle expansion for the center card
      target.classList.toggle('expanded');
    }
  });
  
  // Initial render
  renderCharacters();
  