import React from 'react';
import './styles.css';
import Header from '../Header';
import Banner from '../Banner';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import About from '../About';

export default function PageDefault (){
    return(
        <div className="pageDefault">
            <main>
                <Header/>
                <Banner/>
                <Portfolio/>
                <About/>
                <Footer/>
            </main>
        </div>
    );
};