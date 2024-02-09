import { configureStore } from "@reduxjs/toolkit";
import { finchGlowApi } from "../common/api";

const Store = configureStore({
  reducer: {
    // add all reducers here
    [finchGlowApi.reducerPath]: finchGlowApi.reducer,
  },
  middleware: (getDefautlMiddleware) =>
    getDefautlMiddleware().concat(finchGlowApi.middleware),
});

// export store:
export default Store;
