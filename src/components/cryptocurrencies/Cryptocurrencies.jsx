import React, { useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import { CoinList } from "./CoinList";
import "./Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoAPI";

// enum SortingDirection {
//   ASCENDING = "ASCENDING",
//   DESCENDING = "DESCENDING",
//   UNSORTED = "UNSORTED"
// }

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

  const { data: cryptosList, refetch, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);

  const [sortOrder, setSortOrder] = useState(defaultSortOrder);

  /* refetch the data after 15s */
  useEffect(() => {
    const refreshDataInterval = setInterval(() => {
      console.log("refreshing data");
      // refetch();
    }, 15000);

    return () => clearInterval(refreshDataInterval);
  }, [cryptosList]);

  /* Search functionality */
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  /* sort data (ASCENDING/DESCENDING/DEFAULT) */
  // const sortData = (data, sortKey, sortValue) => {
  //   return data.sort((a, b) => {
  //     const relevantValueA = a[sortKey];
  //     const relevantValueB = b[sortKey];
  //   });
  // };

  /* Sort given column (e.g sortKey = 'marketCap') */
  const sortColumn = (sortKey) => {
    setCryptos((prevCoins) => {
      const sortedArray = prevCoins.sort((a, b) => {
        const relevantValueA = a[sortKey];
        const relevantValueB = b[sortKey];

        const currentSortOrder = sortOrder[sortKey];

        if (currentSortOrder === "unsorted") {
          setSortOrder((prevSortOrder) => {
            prevSortOrder[sortKey] = "descending";

            return prevSortOrder;
          });

          if (relevantValueA < relevantValueB) return -1;
          if (relevantValueA > relevantValueB) return 1;
          return 0;
        } else if (currentSortOrder === "ascending") {
          setSortOrder((prevSortOrder) => {
            prevSortOrder[sortKey] = "ascending";

            return prevSortOrder;
          });

          if (relevantValueA > relevantValueB) return -1;
          if (relevantValueA < relevantValueB) return 1;
          return 0;
        } else {
          setSortOrder((prevSortOrder) => {
            prevSortOrder[sortKey] = "unsorted";

            return prevSortOrder;
          });
        }

        console.log(sortOrder);
      });

      return [...sortedArray];
    });
  };

  /* Loader */
  if (isFetching) return <Loader />;

  return (
    <div className="cryptocurrencies">
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrencies"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <CoinList cryptos={cryptos} sortColumn={sortColumn} />
    </div>
  );
};
