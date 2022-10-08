import axios from 'axios';
import React, {  createContext, useContext, useEffect, useState } from 'react'
const Crypto = createContext()

const AppContext = ({children}) => {

    const [currency,setcurrency] = useState("INR");
    const [symbol,setsymbol] = useState("₹");
    const [News, setNews] = useState([]);
    const [stock,setstocks] = useState([]);

    useEffect(() => {
       if(currency === "INR") setsymbol("₹")
       else if(currency === "USD") setsymbol("$")
    }, [currency])

    const getCryptoNews =() => {
      axios(`https://newsdata.io/api/1/news?apikey=pub_11954a4c7647fd461e2c81c73dbfccf3b18c8&q=crypto&language=en&category=business`, {
       }).then(response => {
          console.log(response.data);
          setNews(response.data.results);
       })
    }
    const getStocknews =() => {
      axios(`https://newsdata.io/api/1/news?apikey=pub_11954a4c7647fd461e2c81c73dbfccf3b18c8&q=stock&language=en&category=business`, {
       }).then(response => {
          console.log(response.data);
          setNews(response.data.results);
       })
    }

    const ListStocks =() =>{
      axios(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=90171db29ef4387ad340b2f435c8325b`, {
      }).then(response => {
         console.log(response.data);
         setstocks(response.data);
      })
    }
    
  return (
     <Crypto.Provider value={{currency,symbol , setcurrency , getCryptoNews , News , getStocknews ,ListStocks,stock,  setstocks}}>
        {children}
     </Crypto.Provider>
  )
}

export default AppContext


export const CryptoState=()=>{
    return(
      useContext(Crypto)
    )
      
}