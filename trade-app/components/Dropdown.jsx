import React, { useState } from "react";
import { CryptoState } from "../AppContext";

const Dropdown = () => {
  const [drop, setdrop] = useState(false);
  const {currency , setcurrency} = CryptoState()

  console.log(currency);
  return (
    <nav class="p-4  bg-black md:p-2">
      <div class="container flex  justify-end items-end">
        <div class="w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col  rounded-lg  md:flex-row md:mt-0 md:text-sm md:font-medium ">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex justify-between items-center rounded bg-transparent text-white"
                onClick={() => {
                  setdrop(!drop);
                }}
              >
                Dropdown{" "}
                <svg
                  class="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class={`${
                  drop ? "block" : "hidden"
                } z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-5`}
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setcurrency("USD")}
                    >
                      USD
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
      </div>
    </nav>
  );
};

export default Dropdown;
