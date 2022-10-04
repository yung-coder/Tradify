import React from 'react'
import Linegraph from '../components/Linegraph'
const Stockstats = () => {
  return (
    <div className='h-full'>
        <div className='border border-red-600'>
            <div className='flex justify-center items-center flex-col space-y-4'>
                <h1>$144,567</h1>
                <p>+44.36(0.04%) Today</p>
            </div>
            <div>
                <Linegraph />
            </div>
        </div>
    </div>
  )
}

export default Stockstats