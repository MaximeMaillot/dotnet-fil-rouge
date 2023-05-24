import { createSlice } from "@reduxjs/toolkit";
import membersData from './../../data/test-members.json';

export const memberSlice = createSlice({
    name: "member",
    initialState: {
        members: membersData.members,
        currentMemberId: -1,
        currentMember : {} // TODO
    },
    reducers: {
        addMember: (state, action) => {
            return [...state, action.payload]
        },
        removeMember: (state, action) => {
            return state.filter((s) => {
                return s.member_id !== action.payload.id
            })
        },
        connectMember: (state, action) => {
            const member = state.members.find((member) => member.username === action.payload.username && member.password === action.payload.password)
            if (member) {
                state.currentMemberId = member.member_id
            } else {
                state.currentMemberId = -1
            }
            return state
        },
        disconnectMember: (state) => {
            state.currentMemberId = -1
            return state
        }
    }
})

export const { addMember, removeMember, connectMember, disconnectMember } = memberSlice.actions;

export default memberSlice.reducer;