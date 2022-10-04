import axios from 'axios';
import React, { useEffect } from 'react'


const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=ccu3fe2ad3iei7t0o2fgccu3fe2ad3iei7t0o2g0`;

const Stockfeed = () => {
  const getStocksData = () => {
    return axios
      .get(`${BASE_URL}AAPL${KEY_URL}`)
       console.log()
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
     
  }, [])
  
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Stockfeed