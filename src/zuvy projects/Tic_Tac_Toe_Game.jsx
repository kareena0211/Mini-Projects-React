import React, { useState } from "react";

const TicTacToeGame = () => {
  const winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (let i = 0; i < winnerArray.length; i++) {
      let [x, y, z] = winnerArray[i];

      if (inputs[x] && inputs[x] === inputs[y] && inputs[y] === inputs[z]) {
        return true;
      }
    }
    return null;
  };

  const [inputs, setInputs] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(true);
  const winner = calculateWinner();

  let status = "";
  if (winner) {
    status = "Winner is " + (player ? "0" : "X");
  } else {
    status = "Next player is" + (player ? "X" : "0");
  }

  const handelInput = (e) => {
    console.log(e.target.dataset.key);

    if (inputs[e.target.dataset.index] !== "") return;

    let copiedArray = inputs.map((input, index) => {
      if (index == e.target.dataset.index) {
        return player ? "X" : "0";
      }
      return input;
    });

    setInputs(copiedArray);
    setPlayer(!player);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe Game</h1>
      <div onClick={handelInput} className="grid grid-cols-3 gap-2">
        {inputs.map((input, index) => (
          <div
            key={index}
            data-index={index}
            className="w-20 h-20 bg-gray-200 flex items-center justify-center text-3xl cursor-pointer"
          >
            {input}
          </div>
        ))}
      </div>
      <p>{status}</p>
    </div>
  );
};

export default TicTacToeGame;
