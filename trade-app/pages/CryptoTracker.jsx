import React from "react";
import Carousel from "../components/Carousel";
import Cointable from "../components/Cointable";
import Dropdown from "../components/Dropdown";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[400px]">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500  border h-full  ">
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
