import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../AppContext";
import { CoinList } from "../utils/endpoints";

const Cointable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const { currency } = CryptoState();
  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));

    setcoins(data);
    setloading(false)
  };

  useEffect(() => {
    fetchCoins()
  }, [currency])

  console.log(coins);
  
  return <div>
    
  </div>;
};

export default Cointable;
