import React, { useRef, useState } from "react";
import Button from "./Button";

const Stopwatch = () => {
  const currentTime = useRef(0);
  const [passedTime, setPassedTime] = useState(0);
  const intervalId = useRef(null);

  const handleStart = () => {
    currentTime.current = Date.now();
    intervalId.current = setInterval(() => {
      setPassedTime(Date.now() - currentTime.current);
    }, 10);
  };
  const handelStop = () => {
    clearInterval(intervalId.current);
  };
  const handelReset = () => {
    setPassedTime(0);
  };

  const formateTime = () => {
    let min = Math.floor((passedTime / (1000 * 60)) % 60);
    let sec = Math.floor((passedTime / 1000) % 60);
    let milisec = Math.floor((passedTime % 1000) / 10);

    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milisec = String(milisec).padStart(2, "0");
    return `${min}:${sec}:${milisec}`;
  };

  return (
    <div className="flex justify-center items-center bg-[#ecfdf5] h-[88vh]">
      <div className=" flex justify-center items-center flex-col bg-[#059669] p-6 rounded-2xl">
        <h1 className="text-3xl mb-4">Stopwatch</h1>
        <div className="flex justify-center items-center bg-gray-200 h-16 w-48 mb-4">
          <div className="text-4xl">{formateTime()}</div>
        </div>
        <div className="flex gap-8 m-6">
          <Button
            name="start"
            handlerFunction={handleStart}
            backgroundColor="#22c55e"
            hoverBG="#0369a1"
          />
          <Button
            name="stop"
            handlerFunction={handelStop}
            backgroundColor="#ef4444"
            hoverBG="#0369a1"
          />
          <Button
            name="Reset"
            handlerFunction={handelReset}
            backgroundColor="#3b82f6"
            hoverBG="#0369a1"
          />
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
