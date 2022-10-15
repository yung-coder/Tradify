import React from "react";
import Link from "next/link";
import bull from "../images/bull.jpg";
import Image from "next/image";
import { CryptoState } from "../AppContext";
const Stockcard = () => {
  const {mode} = CryptoState()
  return (
    <div>
      <Link href="/Stocks">
        <div className={`w-52 ${mode === 'light' ? 'bg-black' : 'bg-gray-200'}  p-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-700`}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28">
              <Image src={bull} className="rounded-full"></Image>
            </div>
            <div className="mt-6">
              <h1 className={`text-xl ${mode === 'light' ? 'text-white' : 'text-black'}  font-bold`}>Stock monitoring</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Stockcard;
