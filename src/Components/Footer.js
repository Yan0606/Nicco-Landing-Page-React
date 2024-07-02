import React from "react";
import Nicco from "../Assets/nicco.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Nicco} alt="Logo Nicco" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Ajuda</span>
          <span>Dúvidas</span>
          <span>Compartilhar</span>
          <span>Feedback</span>
        </div>
        <div className="footer-section-columns">
          <span>018-99653-8506</span>
          <span>nicco@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
