import React from "react";
import crypto from "../images/crypto.png";
import Image from "next/image";
import Link from "next/link";
const Cryptocard = () => {
  return (
    <div>
      <Link href="/CryptoTracker">
        <div class="w-52  bg-black p-5 rounded-2xl drop-shadow-2xl shadow-blue-700">
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28">
              <Image src={crypto} className="rounded-full"></Image>
            </div>
            <div className="mt-6">
              <h1 className="text-xl text-white font-bold">
                Crypto monitoring
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cryptocard;
