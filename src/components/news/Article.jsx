import React from "react";
import moment from "moment";

import "./Article.scss";
import { News } from "./News";

export const Article = ({ info }) => {
  // console.log(info);
  return (
    <a className="article" href={info.url} target="_blank" rel="noreferrer">
      <div className="content">
        <span className="title">{info.name}</span>
        <span className="description">
          {info.description.length > 100
            ? `${info.description.substring(0, 100)}...`
            : info.description}
        </span>
      </div>
      <div className="provider">
        <div className="provider-info">
          <img
            className="provider-img"
            src={info.provider[0]?.image?.thumbnail?.contentUrl}
            alt="provider"
          />
          <span className="provider-name">{info.provider[0]?.name}</span>
        </div>
        <span className="provider-date">
          {moment(info.datePublished).startOf("ss").fromNow()}
        </span>
      </div>
    </a>
  );
};
