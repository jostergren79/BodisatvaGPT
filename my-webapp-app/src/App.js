import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background-container';
    document.querySelector('.App').appendChild(backgroundContainer);

    // Function to generate bubbles
    const generateBubble = () => {
      const bubble = document.createElement('img');
      bubble.src = 'Bubble1.webp'; // Adjust the path as necessary
      bubble.className = 'background-element';
      bubble.style.animation = `bubbleRise 25s infinite linear`;
      bubble.style.bottom = '-5%'; // Start below the viewport
      bubble.style.left = `${Math.random() * 100}%`;
      backgroundContainer.appendChild(bubble);
      setTimeout(() => bubble.remove(), 15000);
    };

    // Function to generate fish
    const generateFish = () => {
      const fish = document.createElement('img');
      fish.src = 'Fish1.gif'; // Adjust the path as necessary
      fish.className = 'background-element';
      fish.style.animation = `fishSwim 20s infinite linear`;
      fish.style.bottom = `${Math.random() * 100}%`;
      fish.style.left = '-20%'; // Start from the left side
      backgroundContainer.appendChild(fish);
      setTimeout(() => fish.remove(), 20000);
    };

    setInterval(generateBubble, 4000);
    setInterval(generateFish, 10000);
  }, []);

  const handleOptionSelect = (option) => {
    console.log(`Option selected: ${option}`);
    // Here, replace with the navigation or functionality for each option
  };

  return (
    <div className="App">
      <div className="menu-option" onClick={() => handleOptionSelect('Register')}>Register</div>
      <div className="menu-option" onClick={() => handleOptionSelect('Play Game')}>Play Game</div>
    </div>
  );
}

export default App;
