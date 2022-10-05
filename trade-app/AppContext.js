import axios from 'axios';
import React, {  createContext, useContext, useEffect, useState } from 'react'
const Crypto = createContext()

const AppContext = ({children}) => {

    const [currency,setcurrency] = useState("INR");
    const [symbol,setsymbol] = useState("₹");
    const [News, setNews] = useState([]);

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
    
  return (
     <Crypto.Provider value={{currency,symbol , setcurrency , getCryptoNews , News , getStocknews }}>
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