import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";

export default configureStore({
    reducer: {
        projects: projectSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
});