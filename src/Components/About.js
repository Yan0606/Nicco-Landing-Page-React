import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/nikeBr.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>
        <h1 className="primary-heading">
        Pise com Estilo: Onde os Tênis Encontram a Performance
        </h1>
        <p className="primary-text">
        Sua jornada pelo tênis perfeito começa aqui.
        Seja na pista ou nas ruas, encontre seu ajuste perfeito com nossa seleção cuidadosamente escolhida de tênis.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Veja Sobre !</button>
        </div>
      </div>
    </div>
  );
};

export default About;
