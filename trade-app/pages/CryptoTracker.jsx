import React from "react";
import Carousel from "../components/Carousel";
import Cointable from "../components/Cointable";
import Dropdown from "../components/Dropdown";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[400px]">
        <div className="bg-gradient-to-r h-full  bg-[#9FE2BF] flex flex-col space-y-3">
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-slate-800 text-3xl font-bold">Trending Coins</h1>
          </div>
          <Carousel />
        </div>
      </div>
      <div className="w-full">
        <Dropdown />
      </div>
      <Cointable />
    </div>
  );
};

export default CryptoTracker;
