import { Header } from 'components/header/Header';
import React, {useState, useEffect} from 'react';
import close from 'assets/img/icon-close.svg';
import 'components/quests/style/Quests.css';
import QuestsTitle from './QuestsTitle';
import QuestsFilter from './QuestsFilter';
import person from 'assets/img/icon-person.svg';
import puzzle from 'assets/img/icon-puzzle.svg';
import delimiter from 'assets/img/delimiter.png';
import Footer from 'components/footer/Footer'
import 'components/footer/Footer.css';
import { Link } from 'react-router-dom';


const Quests = () => {
    const [quests, setQuests] = useState([]);
    const [filteredQuests, setFilteredQuests] = useState(quests);
    const [isActive, setIsActive] = useState(false);

   
    const myClass = "filter_item" + (isActive ? " active" : "");

    useEffect(() => {
      fetch('http://localhost:3001/quests')
        .then(response => response.json())
        .then(data => {
            setQuests(data)
            setFilteredQuests(data)
        })
        .catch(error => console.error(error));
    }, []);
    

    
// useEffect(() => {
//         console.log(filteredQuests);
// }, [filteredQuests]);

function getQuestType(e){
    setIsActive(!isActive);
    const questValue = e.target.dataset.value;
    if(questValue === 'all'){
        setFilteredQuests(quests)
    } else{
        setFilteredQuests(quests.filter((type) => type.type === questValue))
    }
}

    return (
        <div className='home_page'>
            <Header/>
            <QuestsTitle/>
            <QuestsFilter getQuestType={getQuestType} myClass={myClass}/>
            <div className='home_content'>
                <div className='cards'>
                {filteredQuests?.map(quest => (
                <div className='card' key={quest.id}>
                    <Link to={`/quests/${quest.id}`}>
                        <img className='quest_img' src={quest.previewImg} alt='img'/>
                    </Link>
                    <div className="quest_info">
                        <p>{quest.title}</p>
                        <div className='type_count'>
                            <img src={person} alt={person}/>
                            <p className='people_count'>{quest.peopleCount[0]}-{quest.peopleCount[1]}</p>
                            <img className='delimeter_img' src={delimiter} alt={delimiter}/>
                            <img className='puzzle_img' src={puzzle} alt={puzzle}/>
                            <p className='quest_level'>{quest.level}</p>
                        </div>
                    </div>
                </div>
        ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Quests;