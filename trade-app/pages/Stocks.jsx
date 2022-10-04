import React from 'react'
import Stockfeed from '../components/Stockfeed'
import Stockstats from '../components/Stockstats'

const Stocks = () => {
  return (
    <div className='flex flex-col space-y-4'>
        <div>
            <Stockstats />
        </div>
        <div>
          <Stockfeed />
        </div>
    </div>
  )
}

export default Stocks