import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { coinGeckoApi } from "../services/coinGeckoAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  },
});
