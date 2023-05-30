import { createSlice } from "@reduxjs/toolkit";
import usersData from '../../data/test-users.json';

export const userslice = createSlice({
    name: "user",
    initialState: {
        users: usersData.users,
        currentUserId: -1,
        currentUser : {} // TODO
    },
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]
        },
        removeUser: (state, action) => {
            return state.filter((s) => {
                return s.user_id !== action.payload.id
            })
        },
        connectUser: (state, action) => {
            const user = state.users.find((user) => user.username === action.payload.username && user.password === action.payload.password)
            if (user) {
                state.currentUserId = user.user_id
            } else {
                state.currentUserId = -1
            }
            return state
        },
        disconnectUser: (state) => {
            state.currentUserId = -1
            return state
        }
    }
})

export const { addUser, removeUser, connectUser, disconnectUser } = userslice.actions;

export default userslice.reducer;