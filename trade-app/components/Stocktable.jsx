import React, { useEffect } from "react";
import { CryptoState } from "../AppContext";

const Stocktable = () => {
  const { stock } = CryptoState();
  return (
    <div>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Symbol
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {stock.map((info) => {
              return (
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {info.name}
                  </th>
                  <td class="py-4 px-6">ffff</td>
                  <td class="py-4 px-6">Laptop</td>
                  <td class="py-4 px-6">$2999</td>
                </tr>
              );
            })}
            {/* <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-6">White</td>
              <td class="py-4 px-6">Laptop PC</td>
              <td class="py-4 px-6">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="py-4 px-6">Black</td>
              <td class="py-4 px-6">Accessories</td>
              <td class="py-4 px-6">$99</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stocktable;
