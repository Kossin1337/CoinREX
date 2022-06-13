import React from "react";
import { TailSpin } from "svg-loaders-react";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <TailSpin />
    </div>
  );
};
