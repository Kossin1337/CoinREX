import React from "react";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { Article } from "./Article";
import "./News.scss";

export const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 3 : 9,
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <div className="news-wrapper">
      {cryptoNews.value.map((news, i) => (
        <Article info={news} key={i} />
      ))}
    </div>
  );
};
