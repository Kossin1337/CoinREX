import React from "react";
import millify from "millify";

import "./Main.scss";

export const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="main">
        <h2 className="title">Global Crypto Stats</h2>
        <ul className="menu">
          <li className="menu-item">
            <span className="menu-title">Total Cryptocurrencies</span>
            <span className="menu-ammout">10</span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Exchanges</span>
            <span className="menu-ammout">10</span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Market Cap</span>
            <span className="menu-ammout">10</span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total 24H Volume</span>
            <span className="menu-ammout">10</span>
          </li>
          <li className="menu-item">
            <span className="menu-title">Total Markets</span>
            <span className="menu-ammout">10</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
