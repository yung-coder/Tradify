import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoState } from "../../AppContext";

const Post = () => {
  const { query } = useRouter();
  const [details, setdetails] = useState([]);
  const Coininfo = () => {
    axios(
      `https://financialmodelingprep.com/api/v3/profile/${query.id}?apikey=90171db29ef4387ad340b2f435c8325b`
    ).then((response) => {
      console.log(response.data);
      setdetails(response.data);
    });
  };

  useEffect(() => {
    Coininfo();
  }, []);

  return (
    <div>
      {details.map((item) => {
        return (
          <div key={item.symbol}>
            <div className="flex flex-col space-y-6 p-3">
              <div className="flex flex-col space-y-6 justify-center items-center">
                <img src={item.image} alt="" />
                <h1 className="text-xl font-bold md:text-3xl">{item.sector}</h1>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 font-semibold md:text-2xl">
                <div className="flex space-x-5">
                  <p>{item.companyName}</p>
                  <p>{item.volAvg}</p>
                </div>
                <div className="flex space-x-5">
                  <p>{item.price}$</p>
                  <p>{item.mktCap}$</p>
                </div>
                <div>
                  <a href={item.website} className="md:text-blue-800">
                    Website 🌐
                  </a>
                </div>
              </div>
              <hr />
              <div className="w-[360px] p-2 text-center font-medium flex flex-col space-y-6 justify-center items-center md:w-full  md:p-5 md:text-xl md:h-[500px] ">
                <h1 className="text-2xl font-bold underline md:text-3xl">
                  About
                </h1>
                <p className="md:p-4 md:leading-loose">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
