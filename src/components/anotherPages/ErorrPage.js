import React from 'react';
import 'components/anotherPages/style/ErrorPage.css'
import { Header } from 'components/header/Header';


const ErorrPage = () => {
    return (
        <div>
            <Header/>
            <div className='error_page'>
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for could not be found.</p>
                <a href="/">Go to homepage</a>
            </div>
        </div>

    );
};

export default ErorrPage;