import React, { useRef, useState } from "react";
import Button from "./Button";

const Timer = () => {
  const [hh, setHH] = useState(0);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);
  const totalSeconds = useRef(null);
  const intervalId = useRef(null);

  const handleStart = () => {
    if (hh === 0 && mm === 0 && ss === 0) return;
    totalSeconds.current = hh * 3600 + mm * 60 + ss;
    intervalId.current = setInterval(() => {
      totalSeconds.current -= 1;
      setHH(Math.floor(totalSeconds.current / 3600));
      setMM(Math.floor((totalSeconds.current / 60) % 60));
      setSS(Math.floor(totalSeconds.current % 60));
      if (totalSeconds.current === 0) clearInterval(intervalId);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    setHH(0);
    setMM(0);
    setSS(0);
  };

  return (
    <div className=" bg-red-400 flex justify-center items-center flex-col h-[89.7vh]">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Timer
      </h1>

      <div>
        <div className="flex items-center  border border-gray-200 p-6 justify-center gap-2 rounded-lg shadow-md">
          <input
            type="number"
            placeholder="hh"
            className="w-20 h-14 px-4 py-2 bg-gray-100 border-r-2 border-gray-200 focus:outline-none rounded-l-lg text-center"
            value={hh}
            onChange={(e) => setHH(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="mm"
            className="w-20 h-14 px-4 py-2 bg-gray-100 border-r-2 border-gray-200 focus:outline-none text-center"
            value={mm}
            onChange={(e) => setMM(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ss"
            className="w-20 h-14 px-4 py-2 bg-gray-100 focus:outline-none rounded-r-lg text-center"
            value={ss}
            onChange={(e) => setSS(Number(e.target.value))}
          />
        </div>
        <div className=" m-5 p-5  flex gap-5">
          <Button
            name="Start"
            backgroundColor="#0891b2"
            hoverColor=" 2px solid #000"
            handlerFunction={handleStart}
          />{" "}
          <Button
            name="Stop"
            backgroundColor="#0891b2"
            hoverColor=" 2px solid #000"
            handlerFunction={handleStop}
          />
          <Button
            name="Reset"
            backgroundColor="#0891b2"
            hoverColor=" 2px solid #000"
            handlerFunction={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
