import React from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import foto1 from '../../assets/portifolio/1.jpg';
import foto2 from '../../assets/portifolio/2.jpg';
import foto3 from '../../assets/portifolio/3.jpg';
import foto4 from '../../assets/portifolio/4.jpg';
import foto5 from '../../assets/portifolio/5.jpg';
import foto6 from '../../assets/portifolio/6.jpg';
import foto7 from '../../assets/portifolio/7.jpg';
import foto8 from '../../assets/portifolio/8.jpg';
import foto9 from '../../assets/portifolio/9.jpg';

export default function Portfolio() {
  AOS.init({
    offset: 250, // deslocamento (em px) do ponto de acionamento original
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div className="portfolio">
      <div className="campo">
        <h1>Check out some of my best work</h1>
        <div className="fotos">
          <div>
            <img data-aos="fade" src={foto1} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto2} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto3} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto4} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto5} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto6} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto7} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto8} alt="foto" />
          </div>
          <div>
            <img data-aos="fade" src={foto9} alt="foto" />
          </div>
        </div>
      </div>
    </div>
  );
}
