import React from 'react';
import './styles.css';
import fotoFundo from '../../assets/Schema 02 null.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner (){
    AOS.init();
    return(
        <div className="Banner">
            <div className="foto">
                <img src={fotoFundo} alt="Foto de fundo"/>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000" className="Profissoes">
                <h1>Front-End Developer.</h1>
                <p>also a photographer in free time</p>
            </div>
        </div>
    );
}