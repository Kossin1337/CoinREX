import React, { useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import { CoinList } from "./CoinList";
import "./Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoAPI";

const defaultSortOrder = {
  name: "unsorted",
  price: "unsorted",
  marketCap: "unsorted",
  change: "unsorted",
  "24hVolume": "unsorted",
};

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [filteredCryptos, setFilteredCryptos] = useState();
  const [cryptos, setCryptos] = useState([]);

  console.log("Crypto list below");
  console.log(cryptosList);

  /* refetch the data after 15s */
  // useEffect(() => {
  //   const refreshDataInterval = setInterval(() => {
  //     console.log("refreshing data");
  //     // refetch();
  //   }, 15000);

  //   return () => clearInterval(refreshDataInterval);
  // }, [cryptosList]);

  /* Search functionality */
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCryptos(filteredData);
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  /* Sort given column (e.g sortKey = 'marketCap') */
  const sortColumn = (sortKey) => {
    setCryptos((prevCoins) => {
      const sortedArray = prevCoins.sort((a, b) => {
        const relevantValueA = a[sortKey];
        const relevantValueB = b[sortKey];

        const currentSortOrder = sortOrder[sortKey];
        console.log(`Current sort order: ${currentSortOrder}`);

        if (currentSortOrder === "unsorted") {
          return relevantValueA - relevantValueB;
        } else if (currentSortOrder === "descending") {
          return relevantValueB - relevantValueA;
        } else {
          return 0;
        }
      });

      /* change sorting order (UNSORT->DESC->ASC-UNSORT->DESC->ASC...) */
      const order = sortOrder[sortKey];

      if (order === "unsorted") {
        setSortOrder((prevSort) => {
          prevSort = defaultSortOrder;
          prevSort[sortKey] = "descending";

          return prevSort;
        });
      }

      if (order === "descending") {
        setSortOrder((prevSort) => {
          prevSort = defaultSortOrder;
          prevSort[sortKey] = "ascending";

          return prevSort;
        });
      }

      if (order === "ascending") {
        setSortOrder((prevSort) => {
          prevSort = defaultSortOrder;
          prevSort[sortKey] = "unsorted";

          return prevSort;
        });
      }

      return [...sortedArray];
    });
  };

  /* Loader */
  if (isFetching) return <Loader />;

  return (
    <div className="cryptocurrencies">
      {!simplified && (
        <div className="search-crypto">
          <input placeholder="Search Cryptocurrencies" type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}
      <CoinList cryptos={cryptos} sortColumn={sortColumn} sortOrder={sortOrder} />
    </div>
  );
};
