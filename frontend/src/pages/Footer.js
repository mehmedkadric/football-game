import React from "react";
import Logo from "../Assets/logo.png";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/mehmed-kadric-b31b1386/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/leaderboard">Leaderboard</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>
            <a href="mailto:kadricze@gmail.com">kadricze@gmail.com</a>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
