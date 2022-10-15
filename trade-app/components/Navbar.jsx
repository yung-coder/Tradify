import React, { useState } from "react";
import Link from "next/link";
import logo from "../images/tradify.png";
import Image from "next/image";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { CryptoState } from "../AppContext";
const Navbar = () => {
  const [drop, setdrop] = useState(false);
  const { toogleMode, mode } = CryptoState();
  return (
    <div>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          px-4
          md:p-4
          text-lg 
          bg-[#98FB98]
        "
      >
        <div>
          <div className="flex justify-center items-center space-x-5">
            <div className="h-12 w-12">
              <Image src={logo} className="rounded-full"></Image>
            </div>
            <h1 className="italic font-bold">Tradify</h1>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            setdrop(!drop);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            drop ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0 flex justify-center items-center`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base 
              space-y-4
              md:space-y-0
              text-black
              md:space-x-10
              md:flex
              md:justify-between 
              md:pt-0
              font-semibold
              cursor-pointer
              "
          >
            <li className="hover:text-[#004953]">
              <Link className="md:p-4 py-2 block" href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-[#004953]">
              <Link className="md:p-4 py-2 block " href="/CryptoTracker">
                Crypto
              </Link>
            </li>
            <li className="hover:text-[#004953]">
              <Link className="md:p-4 py-2 block " href="/News">
                News
              </Link>
            </li>
            <li className="hover:text-[#004953]">
              <Link className="md:p-4 py-2 block " href="/Stocks">
                Stocks
              </Link>
            </li>
            <li className="hover:text-[#004953]">
              {mode === "light" ? (
                <BsFillMoonFill onClick={toogleMode} />
              ) : (
                <BsSunFill onClick={toogleMode} />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
