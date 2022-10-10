import React from "react";
import Link from "next/link";
import bull from "../images/bull.jpg";
import Image from "next/image";
const Stockcard = () => {
  return (
    <div>
      <Link href="/Stocks">
        <div class="w-52  bg-black p-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-700">
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28">
              <Image src={bull} className="rounded-full"></Image>
            </div>
            <div className="mt-6">
              <h1 className="text-xl text-white font-bold">Stock monitoring</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Stockcard;
