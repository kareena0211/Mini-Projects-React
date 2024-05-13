import React, { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const TicTacToeGame = () => {
  const { width, height } = useWindowSize();
  const container = 1250;
  const confettiWidth = Math.min(width, container);
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
        return inputs[x];
      }
    }
    return null;
  };

  const [inputs, setInputs] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winner = calculateWinner();
    if (winner) {
      setWinner(winner);
      setShowConfetti(true);
      const timeoutId = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inputs]);

  let status = "";
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next player is " + (player ? "X" : "0");
  }

  const handleInput = (e) => {
    if (winner) return;
    const index = parseInt(e.target.dataset.index);
    if (inputs[index] !== "") return;

    const copiedArray = inputs.map((input, i) => {
      if (i === index) {
        return player ? "X" : "0";
      }
      return input;
    });

    setInputs(copiedArray);
    setPlayer(!player);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[88.4vh] bg-[#34d399]">
      {showConfetti && <Confetti width={confettiWidth} height={height} />}
      <h1 className="text-3xl font-bold mb-4 text-[#022c22]">
        Tic Tac Toe Game
      </h1>
      <div onClick={handleInput} className="grid grid-cols-3 gap-2">
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
      <p className="text-2xl mt-3">{status}</p>
      {winner && (
        <button onClick={() => setShowConfetti(true)} className="mt-4"></button>
      )}
    </div>
  );
};

export default TicTacToeGame;
