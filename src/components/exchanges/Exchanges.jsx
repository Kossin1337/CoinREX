import React from "react";
import { Loader } from "../loader/Loader";
import { useGetExchangesQuery } from "../../services/coinGeckoAPI";

import "./Exchanges.scss";

export const Exchanges = () => {
  const { data: exchangesInfo, isFetching } = useGetExchangesQuery();

  console.log(exchangesInfo);

  if (isFetching) return <Loader />;

  return (
    <div className="exchanges-wrapper">
      <div className="exchanges">
        <div className="menu">
          <button>List</button>
          <button>Cards</button>
        </div>
        {exchangesInfo.map((exchange) => {
          return (
            <div className="exchange" key={exchange.id}>
              <div className="info">
                <img src={exchange.image} alt={exchange.id} />
                <span>{exchange.name}</span>
              </div>
              <span>{exchange.name}</span>
              <span>{exchange.name}</span>
              <div className="info">
                <span>{exchange.trust_score}</span>
                <span>{exchange.trust_score_rank}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
