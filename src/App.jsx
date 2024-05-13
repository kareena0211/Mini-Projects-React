import React from "react";
import Navbar from "./zuvy projects/Navbar";
import Tic_Tac_Toe_Game from "./zuvy projects/Tic_Tac_Toe_Game";
import Stopwatch from "./zuvy projects/Stopwatch";
import Timer from "./zuvy projects/Timer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tic_Tac_Toe_Game />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
