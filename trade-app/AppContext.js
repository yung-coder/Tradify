import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const Crypto = createContext();

const AppContext = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setsymbol] = useState("₹");
  const [News, setNews] = useState([]);
  const [stock, setstocks] = useState([]);
  const [company, setcompany] = useState("");
  const [exchange, setexchange] = useState("");
  const [searchres, setsearchres] = useState([]);
  const [change, setchange] = useState(false);
  const [slug,setslug] = useState('');
  const [details,setdetails] = useState([]);
  useEffect(() => {
    if (currency === "INR") setsymbol("₹");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);

  const getCryptoNews = () => {
    axios(
      `https://newsdata.io/api/1/news?apikey=pub_11954a4c7647fd461e2c81c73dbfccf3b18c8&q=crypto&language=en&category=business`,
      {}
    ).then((response) => {
      console.log(response.data);
      setNews(response.data.results);
    });
  };
  const getStocknews = () => {
    axios(
      `https://newsdata.io/api/1/news?apikey=pub_11954a4c7647fd461e2c81c73dbfccf3b18c8&q=stock&language=en&category=business`,
      {}
    ).then((response) => {
      console.log(response.data);
      setNews(response.data.results);
    });
  };

  const ListStocks = () => {
    axios(
      `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=4a7093567c38b37f29104d8be6b7f90b`,
      {}
    ).then((response) => {
      console.log(response.data);
      setstocks(response.data);
    });
  };

  const SearchStock = () => {
    axios(
      `https://financialmodelingprep.com/api/v3/search-name?query=${company}&limit=10&exchange=${exchange}&apikey=4a7093567c38b37f29104d8be6b7f90b`,
      {}
    ).then((response) => {
      console.log(response.data);
      setsearchres(response.data);
      setchange(true);
    });
    setcompany('')
    setexchange('')
  
  };

  const Coininfo =() =>{
    axios(
      `https://financialmodelingprep.com/api/v3/profile/${slug}?apikey=4a7093567c38b37f29104d8be6b7f90b`,
    ).then((response) => {
      console.log(response.data)
      setdetails(response.data);
    });
  }

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setcurrency,
        getCryptoNews,
        News,
        getStocknews,
        ListStocks,
        stock,
        setstocks,
        SearchStock,
        company,
        setcompany,
        exchange,
        setexchange,
        searchres,
        setsearchres,
        change,
        Coininfo,
        details,
        slug,
        setslug
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default AppContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
