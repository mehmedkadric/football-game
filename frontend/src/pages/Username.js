import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Quiz from "./Quiz";

function Username() {
  const [name, setName] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8000/check-username/?username=${name}`
      );

      if (!response.data.error) {
        document.getElementById(
          "username-status"
        ).innerHTML = `${response.data.message}`;
        document.getElementById("username-input").style.display = "none";
        setIsUsernameAvailable(true);
        //navigate("/quiz");
      } else {
        document.getElementById(
          "username-status"
        ).innerHTML = `${response.data.message}`;
        document.getElementById("username-input").style.display = "block";
        setIsUsernameAvailable(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <p id="username-par"></p>
      <p id="chances-par"></p>
      <p id="score-par"></p>
      <div className="generic-section-container">
        {isUsernameAvailable && <Quiz name={name} />}
        <form onSubmit={handleSubmit} id="username-input">
          <label>
            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Start Quiz" />
        </form>
      </div>
      <p id="username-status" className="generic-paragraph-container"></p>
    </>
  );
}

export default Username;
