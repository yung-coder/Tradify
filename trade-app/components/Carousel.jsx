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
            <div className="flex flex-col justify-center items-center space-y-7">
              <div>
              <img src={coin?.image} alt={coin.name} className="h-28" />
              </div>
              <h1>
                {coin?.symbol}
                &nbsp;
              </h1>
              <h1>
                {" "}
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </h1>
              <h1>
                {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
              </h1>
            </div>
          </div>
        </Link>
      </>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="  p-9">
      <AliceCarousel
        autoHeight
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        autoPlay
        className="h-48 w-48"
      />
    </div>
  );
};

export default Carousel;
