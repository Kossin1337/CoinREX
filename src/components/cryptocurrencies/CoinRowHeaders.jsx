import React from "react";

export const CoinRowHeaders = () => {
  return (
    <div className="coin-row coin-headers">
      <div className="coin-header">
        <span className="header-text">Coin Info</span>
      </div>
      <div className="coin-data">
        <span className="header-text">Price</span>
        <span className="header-text">Market Cap</span>
        <span className="header-text">24H</span>
        <span className="header-text">24H Volume</span>
      </div>
    </div>
  );
};
