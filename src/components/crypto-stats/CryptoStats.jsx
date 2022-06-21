import React from "react";
import { Link } from "react-router-dom";
import { useGetGlobalStatsQuery } from "../../services/cryptoAPI";
import { Loader } from "../loader/Loader";
import millify from "millify";
import "./CryptoStats.scss";

export const CryptoStats = () => {
  const { data, isFetching } = useGetGlobalStatsQuery();
  const info = data?.data;

  // millify.options.precision = 3;
  console.log(millify);

  console.log(info);

  if (isFetching) return <Loader />;

  return (
    <div className="crypto-stats-wrapper">
      <h2 className="title">Global Crypto Stats</h2>

      <div className="crypto-stats">
        <ul className="menu">
          <li className="menu-item total-crypto">
            <span className="menu-title ">Total Cryptocurrencies</span>
            <span className="menu-ammount">{info?.totalCoins}</span>
          </li>
          <li className="menu-item total-exchanges">
            <span className="menu-title">Total Exchanges</span>
            <span className="menu-ammount">{info?.totalExchanges}</span>
          </li>
          <li className="menu-item total-market-cap">
            <span className="menu-title">Total Market Cap</span>
            <span className="menu-ammount">
              {millify(info?.totalMarketCap, { precision: 3 })}
            </span>
          </li>
          <li className="menu-item total-24h-volume">
            <span className="menu-title">Total 24H Volume</span>
            <span className="menu-ammount">
              {millify(info?.total24hVolume, { precision: 3 })}
            </span>
          </li>
          <li className="menu-item total-markets">
            <span className="menu-title">Total Markets</span>
            <span className="menu-ammount">{info?.totalMarkets}</span>
          </li>
          <li className="menu-item bitcoin-dominance">
            <span className="menu-title">Bitcoin Dominance</span>
            <span className="menu-ammount">
              {info?.btcDominance.toFixed(2)}%
            </span>
          </li>
        </ul>

        <div className="coins">
          <div className="best-coins-wrapper coin-display">
            <span className="header">Best Coins</span>
            {info?.bestCoins.map((bestCoin, index) => {
              return (
                <Link
                  to={`/crypto/${bestCoin.uuid}`}
                  className="coin best-coin"
                  key={bestCoin.uuid}
                >
                  <img src={bestCoin.iconUrl} alt={bestCoin.name} />
                  <div className="info">
                    <div className="info-coin-data">
                      <span className="name">{bestCoin.name}</span>
                      <span className="symbol">{bestCoin.symbol}</span>
                    </div>
                    <span className="id">#{index + 1}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="newest-coins-wrapper coin-display">
            <span className="header">Newest Coins</span>
            {info?.newestCoins.map((newCoin, index) => {
              return (
                <Link
                  to={`/crypto/${newCoin.uuid}`}
                  className="coin best-coin"
                  key={newCoin.uuid}
                >
                  <img src={newCoin.iconUrl} alt={newCoin.name} />
                  <div className="info">
                    <div className="info-coin-data">
                      <span className="name">{newCoin.name}</span>
                      <span className="symbol">{newCoin.symbol}</span>
                    </div>
                    <span className="id">#{index + 1}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
