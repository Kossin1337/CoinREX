import React from "react";
import millify from "millify";
import "./CryptoDetails.scss";

export const CryptoDetails = ({ stats }) => {
  return (
    <div className="crypto-details">
      <h2 className="title">Global Crypto Stats</h2>
      <ul className="menu">
        <li className="menu-item">
          <span className="menu-title">Total Cryptocurrencies</span>
          <span className="menu-ammout">{millify(stats.total)}</span>
        </li>
        <li className="menu-item">
          <span className="menu-title">Total Exchanges</span>
          <span className="menu-ammout">{millify(stats.totalExchanges)}</span>
        </li>
        <li className="menu-item">
          <span className="menu-title">Total Market Cap</span>
          <span className="menu-ammout">{millify(stats.totalMarkets)}</span>
        </li>
        <li className="menu-item">
          <span className="menu-title">Total 24H Volume</span>
          <span className="menu-ammout">{millify(stats.total24hVolume)}</span>
        </li>
        <li className="menu-item">
          <span className="menu-title">Total Markets</span>
          <span className="menu-ammout">{millify(stats.totalMarkets)}</span>
        </li>
      </ul>
    </div>
  );
};
