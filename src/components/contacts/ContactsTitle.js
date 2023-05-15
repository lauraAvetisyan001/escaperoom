import { Header } from 'components/header/Header';
import React from 'react';
import 'components/contacts/ContactsTitle.css';
import Footer from 'components/footer/Footer';
import ContactsMap from 'components/contacts/ContactsMap'


const ContactsTitle = () => {
    return (
        <div className='contacts_page'>
            <Header/>
            <div className='contacts_container'>
                <div className='contacts_title'>
                    <h3 className='home_page_games'>Ігри у Львові</h3>
                    <h1 className='home_page_title'>Контакти</h1>
                </div>
                <div className='adress_container'>
                    <p className='adress_title'>Адреса</p>
                    <p className='adress'>Львів, <br></br> Площа Ринок, 3Б</p>
                </div>
                <div className='work_time_container'>
                    <p className='work_title'>Години роботи</p>
                    <p className='work_time'>Щоденно, з 9:00 до 20:00</p>
                </div>
                <div className='phone_container'>
                    <p className='phone_title'>Телефон</p>
                    <p className='phone'>+38 (050) 555-99-55</p>
                </div>
                <div className='email_container'>
                    <p className='email_title'>E-mail</p>
                    <p className='email'>lviv.games@game.ua</p>
                </div>
                <ContactsMap/>
            </div>
            <Footer/>
        </div>
    );
};


export default ContactsTitle;