import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const Leaderboard = () => {
  const [gamers, setGamers] = useState([]);

  // Fetch leaderboard data from the backend
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:8000/leaderboard/");
        setGamers(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <div className="leaderboard-container">
        <h2 className="leaderboard-title">Leaderboard - Top 10 gamers</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {gamers.map((gamer, index) => (
              <tr key={gamer.id}>
                <td>{index + 1}</td>
                <td>{gamer.username}</td>
                <td>{gamer.score}</td>
                <td>{gamer.date_created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
