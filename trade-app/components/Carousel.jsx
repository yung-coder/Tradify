import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { CryptoState } from "../AppContext";
import { TrendingCoins } from "../utils/endpoints";
import { numberWithCommas } from "./Cointable";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <>
        <Link href={`/coin/${coin.id}`} key={coin.id}>
          <div>
            <img src={coin?.image} alt={coin.name} height="80" />
            <span>
              {coin?.symbol}
              &nbsp;
              <span>
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            <span>
              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </div>
        </Link>
      </>
    );
  });

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
