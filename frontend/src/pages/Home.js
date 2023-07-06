import React from "react";
import Footer from "../pages/Footer";
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../Assets/clubs.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Content />
    </div>
  );
};

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerImage} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">Guess the Player</h1>

        <p className="primary-text">Player career given, guess correctly!</p>
        <p className="primary-text">Only one correct answer, make it count!</p>
        <p className="primary-text">Think ahead! Only 3 mistakes permitted!</p>
        <button className="secondary-button" onClick={() => navigate("/quiz")}>
          Let's Play! <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
