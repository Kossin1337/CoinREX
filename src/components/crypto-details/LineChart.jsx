import React from "react";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";

export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  console.log(coinHistory);
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      format(
        new Date(coinHistory?.data?.history[i].timestamp * 1000),
        "yyyy-MM-dd HH:mm:ss"
      )
    );
    // console.log(
    //   format(new Date(coinTimestamp[i] * 1000), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    // );
  }

  console.log(coinPrice);
  console.log(coinTimestamp);

  // const data = {
  //   labels: coinTimestamp,
  //   datasets: [
  //     {
  //       label: "Price In USD",
  //       data: coinPrice,
  //       fill: false,
  //       backgroundColor: "#0071bd",
  //       borderColor: "#0071bd",
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <div className="chart">
      <h2 className="chart-title">{`${coinName} Price Chart`}</h2>
      {/* <Line data={data}></Line> */}
    </div>
  );
};
