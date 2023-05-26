import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
        projects: projectSlice,
        users: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
});