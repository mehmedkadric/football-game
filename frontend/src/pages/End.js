import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FinalScore = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { username, score } = state; // Read values passed on state
  const [isScorePosted, setIsScorePosted] = useState(false);
  console.log(username, score);
  const handleScorePost = async () => {
    try {
      console.log(username, score);

      await axios({
        method: "post",
        url: "http://localhost:8000/post-score/",
        data: { username: username, score: score },
      }).then((response) => {});
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="end-section-container">
      <div className="score-container">
        <h2 className="score-title">Final Score</h2>
        <div className="score-details">
          <p className="score-text">Username: {username}</p>
          <p className="score-text">Score: {score}</p>
        </div>
      </div>
      <div className="button-container">
        {!isScorePosted ? (
          <button className="secondary-button" onClick={handleScorePost}>
            Save and Finish
          </button>
        ) : (
          <p className="score-posted"></p>
        )}
      </div>
    </div>
  );
};

export default FinalScore;
