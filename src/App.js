import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Homepage } from "./components/homepage/Homepage";
import { Exchanges } from "./components/exchanges/Exchanges";
import { Cryptocurrencies } from "./components/cryptocurrencies/Cryptocurrencies";
// import { CryptoDetails } from "./components/crypto-details/CryptoDetails";
import { News } from "./components/news/News";

import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        {/* <Route path="/crypto/:coinId" element={<CryptoDetails />} /> */}
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};
