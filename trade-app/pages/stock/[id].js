import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoState } from "../../AppContext";

const Post = () => {
  const { query } = useRouter();
  const [details, setdetails] = useState([]);
  const Coininfo = () => {
    axios(
      `https://financialmodelingprep.com/api/v3/profile/${query.id}?apikey=4a7093567c38b37f29104d8be6b7f90b`
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
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-6 justify-center items-center">
                <img src={item.image} alt="" />
                <h1 className="text-xl font-bold">{item.sector}</h1>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 font-semibold">
                <div className="flex space-x-5">
                  <p>{item.companyName}</p>
                  <p>{item.volAvg}</p>
                </div>
                <div className="flex space-x-5">
                  <p>{item.price}</p>
                  <p>{item.mktCap}</p>
                </div>
                <div>
                  <a href={item.website} className='hover:text-blue-700'>Website ➡️</a>
                </div>
              </div>
              <div className="w-96 border p-3 text-center font-medium flex flex-col space-y-6">
                 <h1 className="text-2xl font-bold">About</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
