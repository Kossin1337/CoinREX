import React from "react";

export const CoinRowHeaders = () => {
  return (
    <div className="coin-row coin-headers">
      <div className="coin-header">
        <span className="header-text">Coin Info</span>
      </div>
      <div className="coin-data">
        <span className="header-text price">Price</span>
        <span className="header-text market-cap">Market Cap</span>
        <span className="header-text 24h">24H</span>
        <span className="header-text volume24h">24H Volume</span>
      </div>
    </div>
  );
};
