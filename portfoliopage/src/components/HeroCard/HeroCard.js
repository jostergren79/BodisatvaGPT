import React, { useState } from 'react';
import './HeroCard.css';  // Make sure the CSS path matches
import image1 from '../../assets/images/image1.png'

function HeroCard() {
    // Creating an array of 20 cards with unique ids, random numbers, and flipped states
    const [cards, setCards] = useState(Array.from({ length: 20 }, (_, index) => ({
        id: index,
        number: Math.floor(Math.random() * 100),
        flipped: false
    })));

    // Function to toggle the flipped state of a card
    const toggleFlip = (id) => {
        setCards(cards.map(card => 
            card.id === id ? {...card, flipped: !card.flipped} : card
        ));
    };

    return (
        <div className="HeroCard">
            {cards.map((card) => (
                <div className="card" key={card.id} onClick={() => toggleFlip(card.id)}>
                    <div className={`card-inner ${card.flipped ? 'is-flipped' : ''}`}>
                        <div className="card-front">
                            {/* Image placed here to be the only visible content on the card */}
                            <img src={ image1} alt="Pixelated Me" />
                        </div>
                        <div className="card-back">
                            More info
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeroCard;
