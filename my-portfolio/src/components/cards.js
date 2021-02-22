import React from 'react';
import Carditem from './Carditem';
import './Cards.css';





function Cards() {
    return (
        <div className="cards">
            <h1>My Current Work</h1>
            <div className="cards__container">

                <ul className="cards__items">
                    <Carditem
                        src={ } text='' path='/' />
                    <Carditem
                        src={ } text='' path='/' />
                    <Carditem
                        src={ } text='' path='/' />

                </ul>
            </div>
        </div>
    )
}

export default Cards
