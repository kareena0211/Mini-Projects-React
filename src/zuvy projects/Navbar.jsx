import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-around text-white">
          <li className="cursor-pointer">
            <Link to="/">Tic Tac Toe Game</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/stopwatch">StopWatch</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
