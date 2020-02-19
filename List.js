import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {
    // console.log(props)
    // newRandomCard = () => {
    //     const id = Math.random().toString(36).substring(2, 4)
    //         + Math.random().toString(36).substring(2, 4);
    //     let output = <Card
    //         key={id}
    //         title={`Random Card ${id}`}
    //         content={'lorem ipsum'} />
    //     console.log(id)
    //     console.log(output)
    //     return output
    // }



    const cardPrint = props.cards.map((cardOut) =>
        <Card
            key={cardOut.id}
            id={cardOut.id}
            title={cardOut.title}
            content={cardOut.content}
            onDelete={props.onDelete} />
    );

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardPrint}

                <button type="button" className="List-add-button" onClick={() => props.onClickAdd(props.id)}>
                    + Add Random Card
            </button>
            </div>
        </section>
    )
}

export default List;