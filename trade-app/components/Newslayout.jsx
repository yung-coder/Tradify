import React from 'react'
import News from '../images/new.png';
import Image from 'next/image';
import Link from 'next/link';
const Newslayout = () => {
  return (
    <div>
      <Link href="/CryptoTracker">
        <div class="w-52  bg-black p-5 rounded-2xl drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center">
            <div className="w-28 h-28">
              <Image src={News} className="rounded-full"></Image>
            </div>
            <div className="mt-6">
              <h1 className="text-xl text-white font-bold">
                Finnace News
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Newslayout