import { createSlice } from "@reduxjs/toolkit";
import membersData from './../../data/test-members.json';

export const memberSlice = createSlice({
    name: "member",
    initialState: membersData.members,
    reducers: {
        addMember: (state, action) => {
            return [...state, action.payload]
        },
        removeMember: (state, action) => {
            return state.filter((s) => {
                return s.member_id !== action.payload.id
            })
        }
    }
})

export const { addMember, removeMember } = memberSlice.actions;

export default memberSlice.reducer;