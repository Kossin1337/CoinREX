import React, { useState } from "react";
import { Coin } from "./Coin";
import { CoinRowHeaders } from "./CoinRowHeaders";
import "./Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoAPI";

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  // console.log(cryptos);

  if (isFetching) return <span>Loading...</span>;

  return (
    <div className="cryptocurrencies">
      <CoinRowHeaders />
      {cryptos?.map((currency) => (
        <Coin currency={currency} key={currency.id}></Coin>
      ))}
    </div>
  );
};
