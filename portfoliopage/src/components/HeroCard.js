import React, { useState, useEffect } from 'react';

function HeroCard() {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const calculateCards = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const columns = Math.floor(width / 150);
      const rows = Math.floor(height / 150);
      return columns * rows;
    };

    const numCards = calculateCards();
    setNumberOfCards(numCards);

    // Generate random numbers for each card
    const numbers = Array.from({ length: numCards }, () => Math.floor(Math.random() * 100));
    setRandomNumbers(numbers);

    const handleResize = () => {
      const resizedNumCards = calculateCards();
      setNumberOfCards(resizedNumCards);
      setRandomNumbers(Array.from({ length: resizedNumCards }, () => Math.floor(Math.random() * 100)));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {randomNumbers.map((number, i) => (
        <div className="card" key={i}>
          <div className="card-inner">
            <div className="card-front">
              {number}
            </div>
            <div className="card-back">
              {/* Back side now empty */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HeroCard;
