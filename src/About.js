import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import aboutImage from './/images/Image.jpg';

function About() {
    return (
        <div>
            <Home />            
            <div className='item-body px-60 py-10'>
                <h1 className='font-serif text-5xl'>about</h1>
                <p className='item-body py-5'>Hello there,<br />
                    Just a dedicated programmer living in Wellington, New Zealand.<br />
                    Beyond of the world of coding, I love to explore new places and cultures,<br />
                    which combines my love for traveling with a curiosity of learning.<br />
                    I always seek new adventures in both my career and personal life.
                </p>
            </div>
            <div className='flex justify-center items-center mb-12'>
                <img src={aboutImage} className="object-cover opacity-75 rounded-lg hover:scale-110 transform transition duration-500" style={{ width: '500px' }} alt='' />
            </div>
            <FooterPage />
        </div>
    );
};

export default About;