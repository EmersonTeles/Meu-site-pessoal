import React from 'react';
import './styles.css';
import perfil from '../../assets/Perfil2.jpg';

export default function About(){
    return(
        <div className="about">
            <div className="foto">
                <img src={perfil} alt="Foto de Perfil" />
                <div className="filter"></div>
            </div>
            <div className="description">
                <div className="text">
                    <h1>Hey there!</h1>
                    <h1>i'm Emerson Teles!</h1>
                    <p> I am a web developer based on Brasilia, Federal District, BR. 
                        I am only 18 and currently studying software engineering at University of Brasilia (UnB).
                        I also love a lot music, cinema and photography.</p> 

                </div>
            </div>
        </div>
    );
}
