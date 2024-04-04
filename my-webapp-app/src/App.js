import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const generateBubble = () => {
      const bubble = document.createElement("img");
      bubble.src = `${process.env.PUBLIC_URL}/Bubble1.webp`; // Path to your bubble image
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = "-50px"; // Start position below viewport
      // Assign a z-index range for bubbles, ensuring some variability
      bubble.style.zIndex = Math.floor(Math.random() * 5) + 1; // z-index 1 to 5 for bubbles
      const animationDuration = `${Math.random() * 5 + 10}s`;
      bubble.style.animation = `rise ${animationDuration} linear infinite`;
      document.querySelector(".App").appendChild(bubble);
      setTimeout(() => bubble.remove(), parseFloat(animationDuration) * 1000);
    };

    const generateFish = () => {
      const fish = document.createElement("img");
      fish.src = `${process.env.PUBLIC_URL}/Fish1.gif`; // Ensure the correct path
      fish.className = "fish";
      fish.style.bottom = `${Math.random() * 50 + 10}vh`;
      // Ensure the fish starts off-screen to the right; this line may be adjusted or added if missing
      fish.style.left = `${Math.random() * 100}%`;
      fish.style.zIndex = Math.floor(Math.random() * 10); // Random z-index for depth
      const animationDuration = `${Math.random() * 20 + 40}s`;
      fish.style.animation = `swim ${animationDuration} linear infinite`;
      document.querySelector(".App").appendChild(fish);
    };
    

    const bubbleInterval = setInterval(generateBubble, 10000);
    const fishInterval = setInterval(generateFish, 10000);

    return () => {
      clearInterval(bubbleInterval);
      clearInterval(fishInterval);
    };
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">Coming soon...!</header> */}
    </div>
  );
}

export default App;
