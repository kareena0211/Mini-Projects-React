import React from "react";
import Tic_Tac_Toe_Game from "./Tic_Tac_Toe_Game";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-around text-white">
          <li className="cursor-pointer">Tic Tac Toe Game</li>
          <li className="cursor-pointer">StopWatch</li>
          <li className="cursor-pointer">Timer</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
