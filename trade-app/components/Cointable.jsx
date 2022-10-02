import axios from "axios";
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

  console.log(coins);

  return (
    <>
      <div>
        <h1>Coin Detalis</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div class="overflow-x-auto shadow-md  md:w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Coin img
              </th>
              <th scope="col" class="py-3 px-6">
                Coin name
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                24hr change
              </th>
              <th scope="col" class="py-3 px-6">
                Market cap
              </th>
            </tr>
          </thead>
          <tbody>
            {handleSearch().map((coin) => {
              const profit = coin.price_change_percentage_24h > 0;
              return (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={coin.image} alt="" className="h-7 w-7 " />
                  </th>
                  <td class="py-4 px-6">{coin.name}</td>
                  <td class="py-4 px-6">
                    {numberWithCommas(coin.current_price.toFixed(2))}
                    {symbol}
                  </td>
                  <td class="py-4 px-6">
                    {profit && "+"}{" "}
                    {coin.price_change_percentage_24h.toFixed(2)}%{symbol}
                  </td>
                  <td class="py-4 px-6">
                    {coin.market_cap.toString().slice(0, -6)} {symbol}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cointable;
