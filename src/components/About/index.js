import React from "react";
import "./styles.css";

export default function About() {
  const unb = "http://fga.unb.br/";
  return (
    <div className="about">
      <div className="foto" />
      <div className="description">
        <div className="text">
          <h1>Oi, tudo bem?</h1>
          <h1>Me chamo Emerson Teles!</h1>
          <p className="biografia">
            Eu sou desenvolvedor frontend. trabalho atualmente com javascript e
            typescript principalmente com React e Nextjs, sou nascido e criado
            em Brasília, atualmente curso engenharia de software na Universidade
            de Brasília (
            <a className="unb" href={unb} target="_blank">
              UnB
            </a>
            ).
          </p>
        </div>
      </div>
    </div>
  );
}
