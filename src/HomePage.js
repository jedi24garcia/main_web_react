import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import consoleImage from './/images/consoles.jpg';

function HomePage() {
    return (
        <div>
            <Home />
                <div className='context flex p-10'>
                    <img src={consoleImage} alt='' /> 
                    <div className='item-body px-20 py-60'>  
                        <p className='font-serif'>"Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim 
                            ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum."
                        </p>   
                    </div>
                </div>
            <FooterPage />
        </div>
    );
};

export default HomePage;