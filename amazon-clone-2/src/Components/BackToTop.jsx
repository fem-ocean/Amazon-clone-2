import React from 'react';
import './../BackToTop.css';
import { Link } from 'react-router-dom';

function BackToTop() {
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        
            <div onClick={scrollToTop} className="backToTop">
                <p className="backToTop__text">Back to top</p>
            </div>
        
    )
}

export default BackToTop
