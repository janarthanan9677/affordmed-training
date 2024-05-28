// GamePage.js
import React, { useState } from 'react';
import './GamePage.css';

const GamePage = () => {
    const cardValues = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
    const [cards, setCards] = useState(Array.from({ length: 3 }, () => getRandomValue()));

    function getRandomValue() {
        const randomIndex = Math.floor(Math.random() * cardValues.length);
        return cardValues[randomIndex];
    }

    const handleCardSelect = (index) => {
        const newCards = [...cards];
        newCards[index] = getRandomValue();
        setCards(newCards);
    };

    return (
        <div className="game-container1">
            <h2>Choose the Card Game</h2>
            <div className="cards-container1">
                {cards.map((value, index) => (
                    <div key={index} className="card1" onClick={() => handleCardSelect(index)}>
                        <div className="content1">
                            <div className="front1">
                                Front
                            </div>
                            <div className="back1">
                                {value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamePage;
