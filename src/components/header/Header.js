import React from 'react';
import header_logo from 'assets/img/header_logo.png'
import 'components/header/Header.css';
import { Link } from 'react-router-dom';


export const Header = (props) => {

    const headerInfo = [{
        headerItems: ['Ігри', 'Новачкам', 'Відгуки', 'Акції', 'Контакти'],
        links: ['/quests', '/newcomers', '/reviews', '/stock', '/contacts'],
    }]


    return (
        <div className='header'>
            <div className='header_content' style={props.style}>
                <img className='header_logo' src={header_logo} alt='logo'/>
                <ul className='header_items'>
                {headerInfo[0].headerItems.map((item, index) => (
                    <Link to={headerInfo[0].links[index]} className='header_item' key={index}>{item}</Link>
                ))}
                </ul>
                <h3 className='phone_number' style={props.style}>+38 (050) 555-99-55</h3>
                </div>
        </div>
    );
};