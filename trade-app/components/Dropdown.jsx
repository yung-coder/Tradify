import React, { useState } from "react";
import { CryptoState } from "../AppContext";

const Dropdown = () => {
  const [drop, setdrop] = useState(false);
  const {currency , setcurrency} = CryptoState()
  
  return (
    <nav className="p-4  bg-slate-700 md:p-2">
        <div className="w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col  rounded-lg  md:flex-row md:mt-0 md:text-sm md:font-medium ">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center rounded bg-transparent text-white"
                onClick={() => {
                  setdrop(!drop);
                }}
              >
                Currency
                <svg
                  className="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={`${
                  drop ? "block" : "hidden"
                } z-10 w-44 font-normal rounded divide-y divide-gray-100 shadow bg-slate-600 absolute mt-5`}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setcurrency("USD")}
                    >
                      USD
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setcurrency("INR")}
                    >
                      INR
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Dropdown;
