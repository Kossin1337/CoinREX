import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { Cryptocurrencies } from "../cryptocurrencies/Cryptocurrencies";
import { CryptoDetails } from "../crypto-details/CryptoDetails";
import { News } from "../news/News";

import "./Homepage.scss";

export const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <div className="main-wrapper">
      <div className="main">
        <CryptoDetails stats={globalStats} />
        <div className="home-heading-container">
          <div className="header">
            <h2 className="title">Top 10 Cryptocurrencies</h2>
            <span className="show-more">
              <Link to="/cryptocurrencies">Show More...</Link>
            </span>
          </div>
        </div>
        <Cryptocurrencies simplified />
        <div className="home-heading-container">
          <div className="header">
            <h2 className="title">Latest Crypto News</h2>
            <span className="show-more">
              <Link to="/news">Show More...</Link>
            </span>
          </div>
        </div>
        <News simplified />
      </div>
    </div>
  );
};
