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
            <div>
              <img src={item.image} alt="" />
               <h1>{item.sector}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
