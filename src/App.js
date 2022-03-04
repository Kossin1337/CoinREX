import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};
