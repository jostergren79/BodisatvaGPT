import React, { useState } from 'react';
import './HeroCard.css';  // Make sure the path to the CSS file is correct

function HeroCard() {
    // Initialize cards with a state
    const initialCards = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        number: Math.floor(Math.random() * 100),
        flipped: false
    }));

    const [cards, setCards] = useState(initialCards);

    const toggleFlip = (id) => {
        // Map through cards and toggle the flip state of the clicked card
        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, flipped: !card.flipped };
            }
            return card;
        });
        setCards(updatedCards);  // Update the state with the new card array
    };

    return (
        <div className="HeroCard">
            {cards.map((card) => (
                <div className="card" key={card.id} onClick={() => toggleFlip(card.id)}>
                    <div className={`card-inner ${card.flipped ? 'is-flipped' : ''}`}>
                        <div className="card-front">
                            {card.number}
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
