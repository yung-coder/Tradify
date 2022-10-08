import React, { useEffect } from "react";
import { CryptoState } from "../AppContext";
import Searchstock from "../components/Searchstock";
import Stocktable from "../components/Stocktable";

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
    <div className="flex flex-col space-y-4">
      <div>
        <div>
          <h1>Stocks</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the company name"
            value={company}
            onChange={(e) => {
              setcompany(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter the name of exchange"
            value={exchange}
            onChange={(e) => {
              setexchange(e.target.value);
            }}
          />
          <div>
            <button onClick={SearchStock}>Search</button>
          </div>
        </div>
      </div>
      <div>{change? <Searchstock /> : <Stocktable />}</div>
    </div>
  );
};

export default Stocks;
