import React from 'react';
import './styles.css';

export default function About(){
    const unb = "unb.br"
    /*
        I am a web developer based on Brasilia, Federal District, BR. 
        I am only 18 and currently studying software engineering at University of Brasilia.
        I also love a lot music, cinema and photography.
    */
    return(
        <div className="about">
            <div className="foto">
            </div>
            <div className="description">
                <div className="text">
                    <h1>Oi, tudo bem?</h1>
                    <h1>Me chamo Emerson Teles!</h1>
                    <p className="biografia"> 
                        Eu sou um desenvolvedor web junior nascido e criado em Brasília, BR.
                        Tenho 18 anos e atualmente estudo engenharia de software na Universidade de Brasília (<a className="unb" href={unb}>UnB</a>).
                        Também sou cinéfilo, músico e flerto fortíssimo com a fotografia. 
                    </p> 

                </div>
            </div>
        </div>
    );
}
