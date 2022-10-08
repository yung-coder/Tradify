import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../AppContext";

const Stocktable = () => {
  const { stock, ListStocks } = CryptoState();
  
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Symbol
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {stock.map((info) => {
              return (
                <Link href={`/stock/${info.symbol}`} key={info.symbol}>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {info.symbol}
                    </th>
                    <td className="py-4 px-6">{info.name}</td>
                    <td className="py-4 px-6">{info.price}</td>
                    <td className="py-4 px-6">{info.change}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stocktable;
