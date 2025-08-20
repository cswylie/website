import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import PhotoPage from "./components/PhotoPage";
import StrumPage from "./components/StrumPage";

import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/photography-artwork" element={<PhotoPage />} />
          <Route path="/strum" element={<StrumPage />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
