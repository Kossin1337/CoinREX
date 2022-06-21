import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { Cryptocurrencies } from "../cryptocurrencies/Cryptocurrencies";
import { CryptoStats } from "../crypto-stats/CryptoStats";
import { News } from "../news/News";

import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className="main-wrapper">
      <div className="main">
        <CryptoStats />
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
