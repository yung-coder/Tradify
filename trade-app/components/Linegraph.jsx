import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const Linegraph = () => {
  const data = [
    {
      x: 10,
      y: 20,
    },
    {
      x: 15,
      y: 10,
    },
  ];
  return (
    <div>
      <Line
        data={{
           datasets:[
            {
                type: 'line',
                data: data,
                borderColor: "gold",
            }
           ]
        }}
        options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
      />
    </div>
  );
};

export default Linegraph;
