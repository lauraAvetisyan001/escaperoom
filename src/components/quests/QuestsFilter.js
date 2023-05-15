import React, {useState} from 'react';
import 'components/quests/style/QuestsFilter.css';


const QuestsFilter = ({getQuestType, myClass}) => {
    const filters = [{
        item: ['Всі Ігри', 'Пригодне', 'Страшне', 'Містичне', 'Детективне', 'Sci-Fi'],
        type: ['all', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi',],
    }];
  
    

    return (
        <div className='home_filter'>
             <ul className='filter_list'>
            {filters[0].item.map((item, index) =>
                <li className={myClass} key={index} data-value={filters[0].type[index]} onClick={getQuestType}>{item}</li>
            )}
            </ul>
        </div>
    );
};
export default QuestsFilter;