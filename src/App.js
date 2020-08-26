import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
class App extends Component{
  render(){
    return (
      <div className="Container">
        <Header/>
        <main>
          <Banner className="Banner"/>
          <Portfolio/>
          <About/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
