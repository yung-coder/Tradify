import React from "react";
import Dropdown from "../components/Dropdown";
import Banner from "../images/temp.jpg";
const CryptoTracker = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-black text-white">
          <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="container-fluid ">
              <a class="text-xl " href="#">
                Navbar
              </a>
            </div>
              <Dropdown />
          </div>
        </nav>
      </div>
      <div className=" border-red-500 border">
        <img
          src="https://thumbs.dreamstime.com/b/ethereum-cryptocurrency-futuristic-style-cyber-digital-coin-eth-banner-website-presentation-computer-circuit-board-220393721.jpg"
          alt=""
          className="md:w-full md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default CryptoTracker;
