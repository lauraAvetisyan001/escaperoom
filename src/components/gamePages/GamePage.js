import Footer from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import React, {useEffect, useState} from 'react';
import 'components/gamePages/GamePage.css';
import { Link, useParams } from 'react-router-dom';
import clock from 'assets/img/icon-clock.svg';
import person from 'assets/img/icon-person.svg';
import puzzle from 'assets/img/icon-puzzle.svg';
import delimiter from 'assets/img/delimiter.png';

const GamePage = () => {
    const { id } = useParams();
    const [quest, setQuest] = useState();

    useEffect(() => {
      fetch('http://localhost:3001/quests')
        .then(response => response.json())
        .then(data => setQuest(data.find((q) => q.id === parseInt(id))))
        .catch(error => console.error(error));
    }, [id]);


    return (
    <>
        {quest && (<div>
            <Header/>
            <div className='game_page_container' style={{backgroundImage: `url(../${quest.coverImg})`}}>
                <div className='about_quest'>
                    <h3 className='quest_type'>{quest.type}</h3>
                    <h1 className='quest_title'>{quest.title}</h1>
                    <div className='quest_details'>
                        <img className='details_img' src={clock} alt='clock'/>
                        <p className='quest_duration'>{quest.duration} хв.</p>
                        <img className='delimeter' src={delimiter} alt={delimiter}/>
                        <img className='details_img' src={person} alt='person'/>
                        <p className='quest_players_count'>{quest.peopleCount[0]}-{quest.peopleCount[1]} осіб</p>
                        <img className='delimeter' src={delimiter} alt={delimiter}/>
                        <img className='details_img' src={puzzle} alt='puzzle'/>
                        <p className='quest_level'>{quest.level}</p>
                    </div>
                    <p className='quest_description'>{quest.description}</p>
                </div>
                <Link to='/join'>
                <button className='join_game_btn'>Взяти участь</button>
                </Link>
            </div>
                <Footer/>
        </div>
    )}
</>
    );
};


export default GamePage;