import { createSlice } from "@reduxjs/toolkit";


export const temporaryStoreSlice = createSlice({
    name: "temporaryStore",
    initialState: {
        task: undefined
    },
    reducers: {
        setStoreTask: (state, action) => {
            state.task = action.payload
            return state
        },
        unSetStoreTask: (state, action) => {
            state.task = undefined;
            return
        }
    }
});

export const {
    setStoreTask,
    unSetStoreTask
} = temporaryStoreSlice.actions;

export default temporaryStoreSlice.reducer;