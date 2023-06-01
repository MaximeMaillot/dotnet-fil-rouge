import { configureStore } from "@reduxjs/toolkit";
import webstoreReducer from "./slices/webStoreSlice.js";
import temporaryStoreReducer from "./slices/temporaryStoreSlice";

export default configureStore({
    reducer: {
        webStore: webstoreReducer,
        temporaryStore: temporaryStoreReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
});