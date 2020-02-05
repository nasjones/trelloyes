import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {
    const cardPrint = props.cards.map((cardOut) =>
        <Card
            key={cardOut.id}
            title={cardOut.title}
            content={cardOut.content} />);
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardPrint}

                <button type="button" className="List-add-button">
                    + Add Random Card
            </button>
            </div>
        </section>
    )
}

export default List;