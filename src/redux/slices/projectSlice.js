import { createSlice } from "@reduxjs/toolkit";
import projectsData from './../../data/test-projects.json';

export const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: projectsData.projects,
        currentProjectId: localStorage.getItem('CurrentProjectId') ? parseInt(localStorage.getItem('CurrentProjectId')) : -1
    },
    reducers: {
        addProject: (state, action) => {
            state.projects = [...state.projects, action.payload]
            return state
        },
        updateProject: (state, action) => {
            // TODO
            return state
        },
        removeProject: (state, action) => {
            state.projects = state.projects.filter((project) => {
                return project.project_id !== action.payload
            })
            return state
        },
        setCurrentProject: (state, action) => {
            localStorage.setItem('CurrentProjectId', action.payload)
            state.currentProjectId = action.payload
            return state
        },
        unsetCurrentProject: (state) => {
            localStorage.removeItem('CurrentProjectId')
            state.currentProjectId = -1
            return state
        },
        addMember: (state, payload) => {
            // TODO
            return state
        },
        updateMember: (state, payload) => {
            // TODO
            return state
        },
        removeMember: (state, payload) => {
            // TODO
            return state
        },
        addTask: (state, payload) => {
            // TODO
            return state
        },
        updateTask: (state, payload) => {
            // TODO
            return state
        },
        removeTask: (state, payload) => {
            // TODO
            return state
        }
    }
})

export const { addProject, removeProject, setCurrentProject, unsetCurrentProject } = projectSlice.actions;

export default projectSlice.reducer;