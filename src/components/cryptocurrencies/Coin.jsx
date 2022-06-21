import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import "./Coin.scss";

export const Coin = ({ currency }) => {
  // console.log(currency)
  const cryptoNameDisplay =
    currency.name === currency.symbol
      ? currency.name
      : `${currency.name} (${currency.symbol})`;

  const cryptoChangeColor = currency.change > 0 ? "green" : "red";

  return (
    <Link
      to={`/crypto/${currency.uuid}`}
      className="coin-row"
      key={currency.uuid}
    >
      <div className="coin-header">
        <img className="image" src={currency.iconUrl} alt={currency.symbol} />
        <span className="name">{cryptoNameDisplay}</span>
        <span className="symbol">{currency.symbol}</span>
        <span className="rank">#{currency.rank}</span>
      </div>
      <div className="coin-data">
        <span className="info price">
          {millify(currency.price, { precision: 2 })}
        </span>
        <span className="info market-cap">
          {millify(currency.marketCap, { precision: 2 })}
        </span>
        <span className={`info 24h ${cryptoChangeColor}`}>
          {millify(currency.change)}%
        </span>
        <span className="info volume24h">
          {millify(currency[`24hVolume`], { precision: 2 })}
        </span>
      </div>
    </Link>
  );
};
