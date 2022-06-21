import React from "react";
import { CoinRowHeaders } from "./CoinRowHeaders";
import { Coin } from "./Coin";

export const CoinList = ({ sortColumn, sortOrder, cryptos }) => {
  return (
    <div className="coin-list">
      <CoinRowHeaders sortColumn={sortColumn} sortOrder={sortOrder} />
      {cryptos?.map((currency) => (
        <Coin currency={currency} key={currency.uuid}></Coin>
      ))}
    </div>
  );
};
