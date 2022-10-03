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
    <div className="flex flex-col items-center md:flex-row space-y-5 justify-center">
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-col justify-between items-center space-y-4">
          <img src={coin?.image.large} alt="" />
          <h1 className="text-4xl font-bold">{coin?.name}</h1>
        </div>

        <div className="break-before-all text-left font-semibold w-[600px] mt-5">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </div>

        <div className="w-full">
          <div className="flex-col justify-center items-center">
            <div className="flex space-x-2">
              <h1 className="font-bold">RANK:</h1>
              <span className="font-medium">{coin?.market_cap_rank}</span>
            </div>
            <div className="flex space-x-2">
              <h1  className="font-bold">CURRENT PRICE:</h1>
              <span className="font-medium"> 
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </span>
            </div>
            <div className="flex space-x-2">
              <h1 className="font-bold">MARKET CAP:</h1>
              <span className="font-medium">
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
