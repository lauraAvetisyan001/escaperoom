import React from 'react';
import 'components/JoinGame/JoinGame.css'
import { Header } from 'components/header/Header';

const JoinGame = () => {

const placeholdersTexts = ['Ваше ім’я', 'Ваш номер телефону', 'Кількість гравців',];

return (
        <div>
            <Header/>
            <div className='join_game_container'>
                <p className='join_game_title'>Заявка на гру</p>
                <div className='form'>
                    {placeholdersTexts.map((item) => 
                        <input placeholder={item} className='join_game_input'/>
                    )}
                <div className='rools_container'>
                    <input className='join_game_checkbox' type='checkbox'/>
                    <p className='join_game_rools'>Погоджуюсь з правилами обробки персональних даних та угодою користувачів</p>
                </div>
                    <button className='submit_btn'>Відправити заявку</button>
                </div>
            </div>
        </div>
    );
};

export default JoinGame;