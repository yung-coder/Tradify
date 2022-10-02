import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoState } from "../../AppContext";
import { SingleCoin } from "../../utils/endpoints";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../../components/Cointable";
import Coininfo from "../../components/Coininfo";
const Post = () => {
  //   const router = useRouter()
  //   const { slug } = router.query
  const { query } = useRouter();
  const [coin, setcoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchcoin = async () => {
    const { data } = await axios.get(SingleCoin(query.id));

    setcoin(data);
  };

  useEffect(() => {
    fetchcoin();
  }, []);

  console.log(coin);

  if (!coin) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div>
        <div className="flex flex-col justify-between items-center">
          <img src={coin?.image.large} alt="" />
          <h1 className="text-4xl font-bold">{coin?.name}</h1>
        </div>

        <div className="break-words font-semibold ">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </div>

        <div>
          <div className="flex-col justify-between">
            <div className="flex space-x-2">
              <h1>RANK</h1>
              <span>{coin?.market_cap_rank}</span>
            </div>
            <div className="flex space-x-2">
              <h1>CURRENT PRICE</h1>
              <span>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </span>
            </div>
            <div className="flex space-x-2">
              <h1>MARKET CAP</h1>
              <span>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <Coininfo coin={coin}/>
    </div>
  );
};

export default Post;
