import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../../services/cryptoAPI";
// import HTMLReactParser from "html-react-parser";
import millify from "millify";
import Select from "react-select";

/* icons imports */
import { FaDiscord, FaCode, FaGithub } from "react-icons/fa";

import "./CryptoDetails.scss";

/* COMMENTS FOR LATER */
/* CHANGING THE TIME PERIOD MAKES THE cryptoDetails fetch again - PREVENT IT */

export const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(data);

  const timeOptions = [
    { value: "3h", label: "3h" },
    { value: "24h", label: "24h" },
    { value: "7d", label: "7d" },
    { value: "30d", label: "30d" },
    { value: "3m", label: "3m" },
    { value: "1y", label: "1y" },
    { value: "3y", label: "3y" },
    { value: "5y", label: "5y" },
  ];

  // const icons = [
  //   {
  //     name: "Discord",
  //     icon: FaDiscord,
  //   },
  //   {
  //     name: "Website",
  //     icon: FaCode,
  //   },
  // ];

  const icons = {
    discord: FaDiscord,
    github: FaGithub,
    website: FaCode,
  };

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    },
    { title: "Rank", value: cryptoDetails?.rank },
    {
      title: "24h Volume",
      // value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.24hVolume)}`,
      // value: `$ ${millify(cryptoDetails?.["24hValue"])}`,
      value: `v a l u e`,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails?.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails?.numberOfExchanges },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? "true" : "false",
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
    },
  ];

  if (isFetching) return <span>Loading...</span>;

  return (
    <div className="crypto-details">
      <div className="crypto-detail-container">
        <img
          className="crypto-symbol"
          src={cryptoDetails.iconUrl}
          alt="crypto-symbol"
        />
        <h1 className="title">{`${cryptoDetails.name} (${cryptoDetails.symbol})`}</h1>
        <span className="rank">{`Rank #${cryptoDetails.rank}`}</span>
      </div>
      <div className="crypto-chart">
        <Select
          className="select-time"
          placeholder="Select Time"
          options={timeOptions}
          onChange={({ value }) => {
            setTimePeriod(value);
          }}
        />
      </div>
      <div className="statistics">
        <div className="stats-col">
          <h2 className="stats-title">{`${cryptoDetails.name} Statistics`}</h2>
          {stats.map((stat) => (
            <div className="stats-row">
              <span className="stats-row-title">{stat.title}</span>
              <span className="stats-row-value">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="stats-col">
          <h2 className="stats-title">{`${cryptoDetails.name} Generic Statistics`}</h2>
          {genericStats.map((stat) => (
            <div className="stats-row">
              <span className="stats-row-title">{stat.title}</span>
              <span className="stats-row-value">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="stats-col links-col">
        {cryptoDetails.links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            className="stats-row links-row"
            rel="noreferrer"
          >
            <div className="link-info">
              <span className="stats-row-value link icon">
                {/* WORK ON THIS */}
                <i className={icons[link.type]}></i>
              </span>
              <span className="stats-row-title link">{link.name}</span>
            </div>
            <span className="stats-row-title link">{link.url}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
