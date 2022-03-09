import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import "./Coin.scss";

export const Coin = ({ currency }) => {
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
        <span className="name">{cryptoNameDisplay}</span>
        <img className="image" src={currency.iconUrl} alt="" />
        <span className="rank">#{currency.rank}</span>
      </div>
      <div className="coin-data">
        <span className="info">{millify(currency.price)}</span>
        <span className="info">{millify(currency.marketCap)}</span>
        <span className={`info ${cryptoChangeColor}`}>
          {millify(currency.change)}%
        </span>
        <span className="info">{millify(currency.price)}</span>
      </div>
    </Link>
  );
};
