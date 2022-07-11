import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coingecko.p.rapidapi.com",
  "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
};

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
    getExchangeDetails: builder.query({
      query: (exchangeId) => createRequest(`/exchanges/${exchangeId}`),
    }),
  }),
});

export const { useGetExchangesQuery } = coinGeckoApi;
