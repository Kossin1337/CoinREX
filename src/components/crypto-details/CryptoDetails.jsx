import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoAPI";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import Select from "react-select";

import { LineChart } from "./LineChart";

/* icons imports */
import {
  FaDiscord,
  FaCode,
  FaGithub,
  FaTelegramPlane,
  FaRedditAlien,
  FaLink,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

import "./CryptoDetails.scss";

/* COMMENTS FOR LATER */
/* CHANGING THE TIME PERIOD MAKES THE cryptoDetails fetch again - PREVENT IT */

export const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;
  // console.log(data);

  if (isFetching) return <span>Loading...</span>;

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

  const icons = {
    discord: <FaDiscord />,
    github: <FaGithub />,
    website: <FaCode />,
    telegram: <FaTelegramPlane />,
    reddit: <FaRedditAlien />,
    linkedin: <FaLinkedin />,
    facebook: <FaFacebook />,
    youtube: <FaYoutube />,
    medium: <FaMedium />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
  };

  const iconsColor = {
    discord: "#5865F2",
    github: "#171515 ",
    website: "limegreen",
    telegram: "#6CC1E3",
    reddit: "#FF4500",
    linkedin: "#0077B5",
    facebook: "#1778F2",
    youtube: "#FF0000",
    medium: "limegreen",
    instagram: "#C32AA3",
    twitter: "#00ACEE",
  };

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${
        cryptoDetails?.price && millify(cryptoDetails?.price, { precision: 3 })
      }`,
    },
    { title: "Rank", value: cryptoDetails?.rank },
    {
      title: "24h Volume",
      // value: `$ ${millify(cryptoDetails["24hVolume"], { precision: 2 })}`,
      value: "-",
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap &&
        millify(cryptoDetails?.marketCap, { precision: 2 })
      }`,
    },
    {
      title: "ATH (All-time-high)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price, { precision: 3 })
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails?.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails?.numberOfExchanges },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? <FaCheck /> : <FaTimes />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total &&
        millify(cryptoDetails?.supply?.total, { precision: 3 })
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating, { precision: 3 })
      }`,
    },
  ];

  return (
    <div className="crypto-details">
      <div className="crypto-detail-container">
        <img
          className="crypto-symbol"
          src={cryptoDetails.iconUrl}
          alt="crypto-symbol"
        />
        <h1 className="title">{`${cryptoDetails.name} (${cryptoDetails.symbol})`}</h1>
        <h2 className="price">{`$${millify(cryptoDetails.price, {
          precision: 3,
        })}`}</h2>
        <h2
          className="price"
          style={{ color: cryptoDetails.change > 0 ? "limegreen" : "red" }}
        >{`${cryptoDetails.change}%`}</h2>
        <span className="rank">{`Rank #${cryptoDetails.rank}`}</span>
      </div>

      <div className="crypto-chart">
        <Select
          className="select-time"
          placeholder="Select Time (default 7 days)"
          options={timeOptions}
          onChange={({ value }) => {
            setTimePeriod(value);
            console.log(value);
          }}
        />
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price, { precision: 3 })}
          coinName={cryptoDetails.name}
        />
      </div>

      <div className="statistics">
        <div className="stats-col">
          <h2 className="stats-title">{`${cryptoDetails.name} Statistics`}</h2>
          {stats.map((stat, index) => (
            <div className="stats-row" key={index}>
              <span className="stats-row-title">{stat.title}</span>
              <span className="stats-row-value">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="stats-col">
          <h2 className="stats-title">{`${cryptoDetails.name} Generic Statistics`}</h2>
          {genericStats.map((stat, index) => (
            <div className="stats-row" key={index}>
              <span className="stats-row-title">{stat.title}</span>
              <span className="stats-row-value">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="sub-title">{`${cryptoDetails.name} Links`}</h2>
      <div className="stats-col links-col">
        {cryptoDetails.links.map((link, id) => {
          return (
            <a
              href={link.url}
              target="_blank"
              className="stats-row links-row"
              rel="noreferrer"
              key={id}
            >
              <div className="link-info">
                <span className="link-icon">
                  <i
                    className="icon-i"
                    style={{ color: `${iconsColor[link.type]}` }}
                  >
                    {icons[link.type] || <FaLink />}
                  </i>
                </span>
                <span className="link-name">{link.name}</span>
              </div>
              <span className="link">{link.url}</span>
            </a>
          );
        })}
      </div>

      <h2 className="sub-title">{`${cryptoDetails.name} Info`}</h2>
      <div className="coin-description">
        {HTMLReactParser(cryptoDetails.description)}
      </div>
    </div>
  );
};
