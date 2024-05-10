import React from "react";

const Timer = () => {
  return (
    <div className=" bg-red-400 flex justify-center items-center flex-col h-[89.7vh]">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Timer
      </h1>

      <div>
        <div className="flex items-center border border-gray-200 rounded-lg shadow-md">
          <input    
            type="number"
            placeholder="hh"
            className="w-20 h-14 px-4 py-2 bg-gray-100 border-r-2 border-gray-200 focus:outline-none rounded-l-lg"
          />
          <input
            type="number"
            placeholder="mm"
            className="w-20 h-14 px-4 py-2 bg-gray-100 border-r-2 border-gray-200 focus:outline-none"
          />
          <input
            type="number"
            placeholder="ss"
            className="w-20 h-14 px-4 py-2 bg-gray-100 focus:outline-none rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
