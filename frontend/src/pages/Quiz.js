import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import End from "./End";

const Quiz = (username) => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(
    "Which player has the following career: West Ham United, Chelsea"
  );
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [chances, setChances] = useState(3);

  // API call to fetch question and options
  const fetchQuestionAndOptions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/get-question/?username=${username.name}`
      );

      setQuestion(response.data.question);
      setOptions(response.data.options);
      setCorrectOption(response.data.correct_option);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === correctOption) {
      setScore(score + 1);
    } else {
      setChances(chances - 1);

      if (chances < 2) {
        navigate("/end", { state: { username: username.name, score: score } });
      }
    }

    setQuestionNumber(questionNumber + 1);
    // Fetch the next question and options from the backend
    fetchQuestionAndOptions();
  };

  // Fetch the initial question and options when the component mounts
  useEffect(() => {
    fetchQuestionAndOptions();
  }, []);

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="quiz-container" id="quiz-container-id">
        <h2 className="question-title">Question {questionNumber}</h2>
        <p className="question-text">{question}</p>
        <form onSubmit={handleSubmit} className="quiz-form">
          <div className="options">
            {options.map((option, index) => (
              <div key={index} className="radio-option">
                <input
                  type="radio"
                  id={`option${index + 1}`}
                  name="answer"
                  value={option}
                  className="radio-input"
                  checked={selectedOption === option} // Check if this option is selected
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index + 1}`} className="radio-label">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="secondary-button">
            Submit
          </button>
        </form>
        <p id="question-status"></p>
      </div>
    </div>
  );
};

export default Quiz;
