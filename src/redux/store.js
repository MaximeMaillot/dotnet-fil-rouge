import { configureStore } from "@reduxjs/toolkit";
import webstoreSlice from "./slices/webstoreSlice";

export default configureStore({
    reducer: {
        webstore: webstoreSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
});