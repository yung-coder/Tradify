import React from "react";
import { CryptoState } from "../AppContext";
import Newscard from "../components/Newscard";

const News = () => {
  const { getCryptoNews, News , getStocknews } = CryptoState();
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="flex space-x-5 mt-6">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={getStocknews}>
              Stock News
            </button>
            <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={getCryptoNews}>
              Crypto News
            </button>
          </div>
        </div>
        <div className="flex
         flex-col justify-center items-center mt-16 space-y-14">
            {News.map((cont)=>{
                return (
                    <Newscard title={cont.title} desc={cont.description} link={cont.link} key={cont.title}/>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default News;
