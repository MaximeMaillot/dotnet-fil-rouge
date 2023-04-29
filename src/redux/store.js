import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import memberSlice from "./slices/memberSlice";

export default configureStore({
    reducer: {
        projects: projectSlice,
        members: memberSlice
    }
});