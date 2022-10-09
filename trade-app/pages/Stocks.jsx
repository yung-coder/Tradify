import React, { useEffect } from "react";
import { CryptoState } from "../AppContext";
import Searchstock from "../components/Searchstock";
import Stocktable from "../components/Stocktable";
import Image from "next/image";
const Stocks = () => {
  const {
    ListStocks,
    company,
    exchange,
    setcompany,
    setexchange,
    SearchStock,
    searchres,
    change,
  } = CryptoState();
  useEffect(() => {
    ListStocks();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center space-y-6 bg-[#7cfc00] p-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Stocks Montringing</h1>
          </div>
          <div className="flex  flex-col justify-center items-center space-y-6 p-5">
          <input
            type="text"
            placeholder="Enter the company name"
            value={company}
            onChange={(e) => {
              setcompany(e.target.value);
            }}
            className="bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Enter the name of exchange"
            value={exchange}
            onChange={(e) => {
              setexchange(e.target.value);
            }}
            className="bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white"
          />
          </div>
          <div>
            <button onClick={SearchStock} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Search</button>
          </div>
        </div>
      </div>
      <div>{change ? <Searchstock /> : <Stocktable />}</div>
    </div>
  );
};

export default Stocks;
