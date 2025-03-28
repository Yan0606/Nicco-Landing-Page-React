import React from "react";
import BannerBackground from "../Assets/home-banner-background.svg";
import BannerImage from "../Assets/dunk-roxo.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Mais que um Tênis, é um <i className="violet">estilo de vida </i>
          </h1>
          <p className="primary-text">
          Escolha Seu Estilo, Encontre Seu Sucesso
          </p>
          <button className="secondary-button-1">
            Leve já <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
