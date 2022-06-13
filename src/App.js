import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Homepage } from "./components/homepage/Homepage";
import { Cryptocurrencies } from "./components/cryptocurrencies/Cryptocurrencies";
import { CryptoDetails } from "./components/crypto-details/CryptoDetails";
import { News } from "./components/news/News";
import { Profile } from "./components/profile/Profile";
import { Loader } from "./components/loader/Loader";

import { useAuth0 } from "@auth0/auth0-react";

import "./App.scss";

export const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <Loader />;

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="news" element={<News />} />
        {isAuthenticated && <Route path="profile/*" element={<Profile />} />}
      </Routes>
      <Footer />
    </div>
  );
};
