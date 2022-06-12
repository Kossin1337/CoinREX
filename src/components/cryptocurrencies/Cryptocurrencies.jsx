import React, { useState, useEffect } from "react";
import { Coin } from "./Coin";
import { CoinRowHeaders } from "./CoinRowHeaders";
import "./Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoAPI";

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <span>Loading...</span>;

  return (
    <div className="cryptocurrencies">
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrencies"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <CoinRowHeaders />
      {cryptos?.map((currency) => (
        <Coin currency={currency} key={currency.uuid}></Coin>
      ))}
    </div>
  );
};
