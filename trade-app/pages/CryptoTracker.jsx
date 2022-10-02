import React from "react";
import Dropdown from "../components/Dropdown";
import Banner from "../images/temp.jpg";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full border-red-500 border">
        <img
          src="https://thumbs.dreamstime.com/b/ethereum-cryptocurrency-futuristic-style-cyber-digital-coin-eth-banner-website-presentation-computer-circuit-board-220393721.jpg"
          alt=""
          className="md:w-full md:h-[80vh]"
        />
      </div>
      <div className="w-full">
        <Dropdown />
      </div>
    </div>
  );
};

export default CryptoTracker;
