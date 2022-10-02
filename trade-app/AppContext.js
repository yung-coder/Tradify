import React, {  createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext()

const AppContext = ({children}) => {

    const [currency,setcurrency] = useState("INR");
    const [symbol,setsymbol] = useState("₹");

    useEffect(() => {
       if(currency === "INR") setsymbol("₹")
       else if(currency === "USD") setsymbol("$")
    }, [])
    
  return (
     <Crypto.Provider value={{currency,symbol , setcurrency}}>
        {children}
     </Crypto.Provider>
  )
}

export default AppContext


export const CryptoState=()=>{
    return useContext(Crypto)
}