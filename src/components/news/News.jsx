import React, { useState } from "react";
import Select from "react-select";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { Article } from "./Article";
import { Loader } from "../loader/Loader";

import "./News.scss";

export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  /* Using RT to get data from Crypto news API */
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 3 : 9,
  });

  /* Using RT to get data from Crypto (coins) API */
  const { data } = useGetCryptosQuery(100);
  const options = data?.data?.coins.map((coin) => ({
    value: coin.name,
    label: coin.name,
  }));

  if (!cryptoNews?.value) return <Loader />;

  return (
    <div className="news-wrapper">
      {!simplified && (
        <Select
          className="select-news"
          placeholder="Select Cryptocurrency"
          options={options}
          onChange={({ value }) => {
            setNewsCategory(value);
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: "orange",
              primary: "limegreen",
              neutral0: "#212121",
              primary25: "#323232",
              primary50: "limegreen",
              neutral40: "#fefefe",
              neutral50: "#fefefe",
              neutral60: "#fefefe",
              neutral70: "#fefefe",
              neutral80: "#fefefe",
              neutral90: "#fefefe",
            },
          })}
        />
      )}
      <div className="news-container">
        {cryptoNews.value.map((news, i) => (
          <Article info={news} key={i} />
        ))}
      </div>
    </div>
  );
};
