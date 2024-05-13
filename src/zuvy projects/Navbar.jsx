import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#115e59] p-4">
        <ul className="flex justify-around text-white uppercase">
          <li className=" hover:bg-[#ecfdf5] p-1  rounded-md hover:text-black">
            <Link to="/">Tic Tac Toe Game</Link>
          </li>
          <li className=" hover:bg-[#ecfdf5] p-1 rounded-md hover:text-black">
            <Link to="/stopwatch">StopWatch</Link>
          </li>
          <li className=" hover:bg-[#ecfdf5] p-1 rounded-md hover:text-black">
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
