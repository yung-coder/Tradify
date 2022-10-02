import React from "react";
import Cointable from "../components/Cointable";
import Dropdown from "../components/Dropdown";
import Banner from "../images/temp.jpg";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img
          src="https://thumbs.dreamstime.com/b/ethereum-cryptocurrency-futuristic-style-cyber-digital-coin-eth-banner-website-presentation-computer-circuit-board-220393721.jpg"
          alt=""
          className="md:w-full md:h-[80vh]"
        />
      </div>
      <div className="w-full">
        <Dropdown />
      </div>
      <Cointable />
    </div>
  );
};

export default CryptoTracker;
