import React from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header(){
    AOS.init();
    return(
        <nav data-aos="fade-down" data-aos-delay="1000">
            <h1 className="copy made">made</h1>
            <h1 className="copy by">by</h1>
            <h1 className="copy made">Teles</h1>
        </nav>
    );
};