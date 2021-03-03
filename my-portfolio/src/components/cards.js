import React from 'react';
import Carditem from './cardlist';
import './Cards.css';
import Restaraunt from '../media/Restaraunt.png';
import Burger from '../media/BurgerBuilder.png';
import DrumKit from '../media/DrumKit.png';
import GuessingGame from '../media/GuessingGame.png';
import Synchronicity from '../media/Synchronicity.png';
import VotersRights from '../media/VotersRights.png';
import TicTacToe from '../media/tictactoe.png';
import SkylarkSocial from '../media/SkylarkSocial.png';
import Budgetapp from '../media/Budgetapp.png';
import Ecommerce from '../media/Ecommerce.png';






function Cards() {
    return (
        <div className="cards">
            <h1>My Work</h1>
            <div className="cards__container">

                <ul className="cards__items">
                    <Carditem
                        src={DrumKit} text='Drum Kit' path='https://github.com/KenMcCr/drumKit.git' label='Drum Kit' />
                    <Carditem
                        src={Synchronicity} text='Optimal Health' path='https://github.com/KenMcCr/optimalHealth.git' label='Synchronicity' />
                    <Carditem
                        src={Restaraunt} text='Restaraunt Reservation' path='https://github.com/KenMcCr/reservePage.git' label='Restaraunt Reservation' />
                    <Carditem
                        src={Budgetapp} text='Budget App' path='/https://github.com/KenMcCr/Budgetapp.git
                        ' label='Budget App' />
                    <Carditem
                        src={Burger} text='Burger Builder' path='https://github.com/KenMcCr/burgerApp.git' label='BurgerBuilder' />
                    <Carditem
                        src={GuessingGame} text='Guessing Game' path='https://github.com/KenMcCr/guessingGame.git' label='Guessing Game' />
                    <Carditem
                        src={SkylarkSocial} text='Skylark Social' path='/' label='Skylark Social' />
                    <Carditem
                        src={TicTacToe} text='TicTacToe' path='/https://github.com/KenMcCr/tictactoe.git' label='TicTacToe' />
                    <Carditem
                        src={VotersRights} text='Voters Rights' path='https://github.com/R2H-Hack-a-Thon-group-2/Voter-Rights.git' label='Voters Rights' />
                    <Carditem
                        src={Ecommerce} text='Ecommerce' path='https://github.com/KenMcCr/reactEcommerce.git' label='Ecommerce' />

                </ul>
            </div>
        </div>
    )
}

export default Cards
