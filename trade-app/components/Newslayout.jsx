import React from "react";
import News from "../images/new.png";
import Image from "next/image";
import Link from "next/link";
import { CryptoState } from "../AppContext";
const Newslayout = () => {
  const { mode } = CryptoState();
  return (
    <div>
      <Link href="/CryptoTracker">
        <div
          class={`w-52  ${
            mode === "light" ? "bg-black" : "bg-gray-200"
          } p-5 rounded-2xl drop-shadow-2xl hover:shadow-2xl hover:shadow-blue-700`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28">
              <Image src={News} className="rounded-full"></Image>
            </div>
            <div className="mt-6">
              <h1
                className={`text-xl ${
                  mode === "light" ? "text-white" : "text-black"
                }  font-bold`}
              >
                Finnace News
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Newslayout;
