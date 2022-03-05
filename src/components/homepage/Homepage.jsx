import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { Link } from "react-router-dom";
import { Cryptocurrencies } from "../cryptocurrencies/Cryptocurrencies";
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
        <h2 className="title">Global Crypto Stats</h2>
        <ul className="menu">
          <li className="menu-item">
            <span className="menu-title">Total Cryptocurrencies</span>
            <span className="menu-ammout">{millify(globalStats.total)}</span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Exchanges</span>
            <span className="menu-ammout">
              {millify(globalStats.totalExchanges)}
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Market Cap</span>
            <span className="menu-ammout">
              {millify(globalStats.totalMarkets)}
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total 24H Volume</span>
            <span className="menu-ammout">
              {millify(globalStats.total24hVolume)}
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Markets</span>
            <span className="menu-ammout">
              {millify(globalStats.totalMarkets)}
            </span>
          </li>
        </ul>
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
