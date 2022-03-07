import React from "react";

import "./Article.scss";

export const Article = ({ info }) => {
  console.log(info);
  return (
    <div className="article">
      <a href={info.url}>
        <span className="title">{info.name}</span>
        <span className="description">
          {info.description > 100
            ? `${info.description.substring(0, 100)}...`
            : info.description}
        </span>
      </a>
    </div>
  );
};
