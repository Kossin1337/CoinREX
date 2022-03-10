import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { format } from "date-fns";
import { type } from "@testing-library/user-event/dist/type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  /* WORKING vv */
  console.log(coinHistory);
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      format(
        new Date(coinHistory?.data?.history[i].timestamp * 1000),
        "yyyy-MM-dd HH:mm:ss"
      )
    );
  }
  console.log(coinPrice);
  console.log(coinTimestamp);
  /* WORKING  ^^ */

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${coinName} Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: "limegreen",
        borderColor: "limegreen",
      },
    ],
  };

  const options = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
    scales: {
      xAxes: [
        {
          id: "x",
          display: true,
          title: {
            display: true,
            text: "Timestamp",
          },
        },
      ],
      yAxes: [
        {
          id: "y",
          display: true,
          title: {
            display: true,
            text: "Coin Price",
          },
          suggestedMin: 0,
          suggestedMax: currentPrice * 1.1,
        },
      ],
    },
  };

  // const config = {
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: "Chart.js Line Chart",
  //       },
  //     },
  //   },
  // };

  return (
    <div className="chart">
      <h2 className="chart-title">{`${coinName} Price Chart`}</h2>
      <Line options={options} data={data}></Line>
    </div>
  );
};
