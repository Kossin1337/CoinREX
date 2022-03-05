import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Homepage } from "./components/homepage/Homepage";
import { Exchanges } from "./components/exchanges/Exchanges";
import { Cryptocurrencies } from "./components/cryptocurrencies/Cryptocurrencies";
import { CryptoDetails } from "./components/crypto-details/CryptoDetails";
import { News } from "./components/news/News";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <div className="content">
        <Routes>
          <Route path="/" component={Homepage} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/cryptocurrencies" component={Cryptocurrencies} />
          <Route path="/crypto/:coinId" component={CryptoDetails} />
          <Route path="/news" component={News} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
