import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CryptoState } from "../AppContext";
import { HistoricalChart } from "../utils/endpoints";
import Chart from "chart.js/auto";
import { chartDays } from "../utils/data";

const Coininfo = ({ coin }) => {
  const [historicalData, setHsitoricalData] = useState();
  const [days, setdays] = useState(1);

  const { currency, setcurrency } = CryptoState();

  const fetchHistorical = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHsitoricalData(data.prices);
  };

  useEffect(() => {
    fetchHistorical();
  }, [currency, days]);

  return (
    <div>
      {!historicalData ? (
        <p>loading..</p>
      ) : (
        <>
          <Line
            data={{
              labels: historicalData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;

                return days == 1 ? time : date.toLocaleString();
              }),

              datasets: [
                {
                  data: historicalData.map((coin) => coin[1]),
                  label: `Price( Past ${days} days) in ${currency}`,
                  borderColor: "gold",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
           <div
              
            >
              {chartDays.map((day) => (
                <button
                  key={day.value}
                  onClick={() => {setdays(day.value);
                    // setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </button>
              ))}
            </div>
        </>
      )}
    </div>
  );
};

export default Coininfo;