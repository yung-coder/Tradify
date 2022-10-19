import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../AppContext";
import { CoinList } from "../utils/endpoints";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Cointable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const { currency } = CryptoState();
  const [search, setSearch] = useState("");
  const { symbol } = CryptoState();
  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));

    setcoins(data);
    setloading(false);
  };

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);


  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-7 bg-[#9FE2BF] h-80 text-black ">
        <div className="flex justify-center items-center font-bold p-2 md:text-4xl md:p-3">
           <h1 className="text-3xl font-bold  italic ">Cryptocurrencies Prices</h1>
        </div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}  className="bg-[#000000] text-white rounded-md outline-none p-2 placeholder:text-white" placeholder="Enter  coin name"/>
      </div>
      <div className="overflow-x-auto shadow-md  md:w-full">
        <table className="w-full text-sm text-left  ">
          <thead className="text-xs  uppercase bg-slate-700 text-white md:text-lg">
            <tr>
              <th scope="col" className="py-3 px-6">
                Coin img
              </th>
              <th scope="col" className="py-3 px-6">
                Coin name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                24hr change
              </th>
              <th scope="col" className="py-3 px-6">
                Market cap
              </th>
            </tr>
          </thead>
          <tbody>
            {handleSearch().map((coin) => {
              const profit = coin.price_change_percentage_24h > 0;
              return (
                <Link href={`/coin/${coin.id}`} key={coin.id} >
                  <tr className="border-b-slate-50  cursor-pointer bg-[#0E0C0A]  text-white">
                    <th
                      scope="row"
                      className=" font-medium  whitespace-nowrap "
                    >
                      <img src={coin.image} alt="" className="h-7 w-7 ml-5 md:h-9 md:w-9" />
                    </th>
                    <td className="py-4 px-6 md:text-lg">{coin.name}</td>
                    <td className="py-4 px-6 md:text-lg">
                      {numberWithCommas(coin.current_price.toFixed(2))}
                      {symbol}
                    </td>
                    <td className={`py-4 px-6 ${profit ? 'text-green-600' : 'text-red-600'} md:text-lg`}>
                      {profit && "+"}
                      {coin.price_change_percentage_24h.toFixed(2)}%{symbol}
                    </td>
                    <td className="py-4 px-6 md:text-lg">
                      {coin.market_cap.toString().slice(0, -6)}{symbol}
                    </td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cointable;
