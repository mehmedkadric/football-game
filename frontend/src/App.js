import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Contact from "./pages/Contact";
import Username from "./pages/Username";
import NoPage from "./pages/NoPage";
import End from "./pages/End";
import Footer from "./pages/Footer";

class App extends React.Component {
  state = { details: [] };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quiz" element={<Username />} />
              <Route path="/end" element={<End />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
