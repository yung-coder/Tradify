import React, { useState } from "react";
import Link from 'next/link';
import logo from '../images/tradify.png';
import Image from 'next/image';
const Navbar = () => {
  const [drop, setdrop] = useState(false);
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
          bg-[#00FA9A]
        "
      >
        <div>
           <div className="flex justify-center items-center space-x-5">
             <div className="h-12 w-12">
               <Image src={logo} className='rounded-full'></Image>
             </div>
             <h1>Tradify</h1>
           </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {setdrop(!drop)}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div className={`${drop ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="
              pt-4
              text-base 
              text-black
              md:space-x-10
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href='/CryptoTracker'>
                Crypto
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/News">
                News
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/Stocks">
                Stocks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
