import React from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  AOS.init();
  return (
    <div className="Banner">
      <div className="foto" />
      <div data-aos="fade-up" data-aos-delay="1000" className="Profissoes">
        <h1>Desenvolvedor Web &amp; Fotógrafo.</h1>
        <p>Transformando o mundo um pixel por vez</p>
      </div>
    </div>
  );
}
