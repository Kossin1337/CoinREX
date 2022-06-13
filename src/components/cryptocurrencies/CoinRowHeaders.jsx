import React from "react";
import { ArrowUpIcon } from "./icons/ArrowUpIcon";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

export const CoinRowHeaders = ({ sortColumn }) => {
  return (
    <div className="coin-row coin-headers">
      <div className="coin-header">
        <span className="header-text">Coin Info</span>
      </div>
      <div className="coin-data">
        <div className="coin-header">
          <span className="header-text price">Price</span>
        </div>
        <div className="coin-header">
          <span className="header-text market-cap">Market Cap</span>
          <div className="icon" onClick={() => sortColumn("marketCap")}>
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
        <div className="coin-header">
          <span className="header-text 24h">24H</span>
          <div className="icon" onClick={() => sortColumn("change")}>
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
        <div className="coin-header">
          <span className="header-text volume24h">24H Volume</span>
        </div>
      </div>
    </div>
  );
};
