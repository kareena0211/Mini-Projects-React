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
    clearInterval(intervalId.current);
    setHH(0);
    setMM(0);
    setSS(0);
  };

  return (
    <div className=" bg-[#ecfdf5] flex justify-center items-center flex-col h-[88.4vh]">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Timer
      </h1>

      <div className="bg-[#064e3b] flex items-center justify-center flex-col p-3">
        <div className="flex items-center p-6 w-[80%] justify-center gap-2 rounded-lg bg-white mt-5 ">
          <input
            type="number"
            placeholder="hh"
            className="w-20 h-14 px-4 py-2  border-r-4 border-[#047857]  focus:outline-none rounded-l-lg text-center"
            value={hh}
            onChange={(e) => setHH(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="mm"
            className="w-20 h-14 px-4 py-2  border-r-4 border-[#047857] focus:outline-none text-center"
            value={mm}
            onChange={(e) => setMM(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ss"
            className="w-20 h-14 px-4 py-2  focus:outline-none rounded-r-lg text-center"
            value={ss}
            onChange={(e) => setSS(Number(e.target.value))}
          />
        </div>
        <div className=" m-5 p-5  flex gap-5">
          <Button
            name="Start"
            backgroundColor="#84cc16"
            hoverBG="#facc15"
            handlerFunction={handleStart}
          />{" "}
          <Button
            name="Stop"
            backgroundColor="#ef4444"
            hoverBG="#facc15"
            handlerFunction={handleStop}
          />
          <Button
            name="Reset"
            backgroundColor="#0891b2"
            hoverBG="#facc15"
            handlerFunction={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
