import React, { useEffect } from 'react'
import { CryptoState } from '../AppContext'
import Stocktable from '../components/Stocktable'

const Stocks = () => {
  const { ListStocks } = CryptoState();
  useEffect(() => {
     ListStocks();
  }, [])
  
  return (
    <div className='flex flex-col space-y-4'>
      <div>
        <div>
           <h1>Stocks</h1>
        </div>
      </div>
      <div>
        <Stocktable />
      </div>
    </div>
  )
}

export default Stocks