import React from "react";
import { ArrowUpIcon } from "./icons/ArrowUpIcon";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

export const CoinRowHeaders = ({ sortColumn, sortOrder }) => {
  console.log(`sort order below`);
  console.log(sortOrder);

  return (
    <div className="coin-row coin-headers">
      <div className="coin-header">
        <span className="header-text">Coin Info</span>
      </div>
      <div className="coin-data">
        <div
          className={`coin-header ${sortOrder.price}`}
          onClick={() => sortColumn("price")}
        >
          <span className="header-text price">Price</span>
          <div className="icon">
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
        <div
          className={`coin-header ${sortOrder.marketCap}`}
          onClick={() => sortColumn("marketCap")}
        >
          <span className="header-text market-cap">Market Cap</span>
          <div className="icon">
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
        <div
          className={`coin-header ${sortOrder.change}`}
          onClick={() => sortColumn("change")}
        >
          <span className="header-text 24h">24H</span>
          <div className="icon">
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
        <div
          className={`coin-header ${sortOrder[`24hVolume`]}`}
          onClick={() => sortColumn("24hVolume")}
        >
          <span className="header-text volume24h">24H Volume</span>
          <div className="icon">
            {true ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};
