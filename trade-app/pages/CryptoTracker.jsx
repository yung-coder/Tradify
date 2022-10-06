import React from "react";
import Carousel from "../components/Carousel";
import Cointable from "../components/Cointable";
import Dropdown from "../components/Dropdown";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[400px]">
        <div className="bg-gradient-to-r h-full  bg-[#419f25] flex flex-col ">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-3xl">Trending Coins</h1>
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
