import React from 'react';
import './app.css'
import Quests from 'components/quests/Quests';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactsTitle from 'components/contacts/ContactsTitle';
import GamePage from 'components/gamePages/GamePage.js';
import NewComers from 'components/anotherPages/NewComers';
import Stock from 'components/anotherPages/Stock';
import Reviews from 'components/anotherPages/Reviews';
import JoinGame from 'components/JoinGame/JoinGame';

const App = () => {
    return (
    <BrowserRouter>
        <div className='home_page'>
             <Routes>
                <Route path='/quests' element={<Quests/>}></Route>
                <Route path='/contacts' element={<ContactsTitle/>}></Route>
                <Route path='/quests/:id' element={<GamePage/>}></Route>
                <Route path='/newcomers' element={<NewComers/>}></Route>
                <Route path='/stock' element={<Stock/>}></Route>
                <Route path='/reviews' element={<Reviews/>}></Route>
                <Route path='/join' element={<JoinGame/>}></Route>
                <Route path='/' element={<Quests/>}></Route> 
            </Routes> 
        </div>
    </BrowserRouter> 
    );
};

export default App;