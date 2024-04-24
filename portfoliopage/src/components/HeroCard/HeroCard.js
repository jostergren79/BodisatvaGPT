import React, { useState, useEffect } from 'react';
import './HeroCard.css';
import bunny from '../../assets/images/bunny.png';
import cat from '../../assets/images/cat.png';
import dog from '../../assets/images/dog.png';
import fish1 from '../../assets/images/fish1.png';
import fish2 from '../../assets/images/fish2.png';
import hamster from '../../assets/images/hamster.png';
import kitten from '../../assets/images/kitten.png';
import lizard from '../../assets/images/lizard.png';
import parrot from '../../assets/images/parrot.png';
import turtle1 from '../../assets/images/turtle1.png';
import turtle2 from '../../assets/images/turtle2.png';

const imageList = [bunny, cat, dog, fish1, fish2, hamster, kitten, lizard, parrot, turtle1, turtle2];

function HeroCard() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let preparedCards = shuffleAndPrepareCards(imageList);
        setCards(preparedCards);
    }, []);

    function shuffleAndPrepareCards(imageList) {
        const doubledList = imageList.concat(imageList);
        return doubledList
            .map((src, index) => ({ id: index, src, flipped: false }))
            .sort(() => Math.random() - 0.5);
    }

    const toggleFlip = (id) => {
        setCards(cards.map(card =>
            card.id === id ? { ...card, flipped: !card.flipped } : card
        ));
    };

    return (
        <div className="HeroCard">
            {cards.map((card) => (
                <div className="card" key={card.id} onClick={() => toggleFlip(card.id)}>
                    <div className={`card-inner ${card.flipped ? 'is-flipped' : ''}`}>
                        <div className="card-front">
                            <span>Memories</span> {/* Use a span for better control */}
                        </div>
                        <div className="card-back">
                            <img src={card.src} alt="Animal" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeroCard;
