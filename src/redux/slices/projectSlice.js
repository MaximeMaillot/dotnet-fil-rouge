import { createSlice } from "@reduxjs/toolkit";
import projectsData from './../../data/test-projects.json';

function getCurrentProjectArrayIndex(projects, id) {
    return projects.findIndex((project) => project.project_id === id)
}

function orderAllProjectsTasks(projects) {
    for (let i = 0; i < projects.length; i++) {
        projects[i].tasks.sort((a,b) => a.order - b.order);
    }
    return projects
}

function orderCurrentProjectsTasks(project) {
    project.tasks.sort((a,b) => a.order - b.order);
    return project
}

function fixTasksOrder(project) {
    for (let i = 0; i < project.tasks.length; i++) {
        project.tasks[i].order = i
    }
}

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
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index] = action.payload
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
        addMember: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].members.push(action.payload)
            return state
        },
        updateMember: (state, action) => {
            // TODO
            return state
        },
        removeMember: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].members = state.projects[index].members.filter((member) => {
                return member !== action.payload
            })
            return state
        },
        addTask: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let task = action.payload
            task.task_id = state.projects[index].tasks.reduce((prev, current) => (prev.y > current.y) ? prev : current).task_id + 1
            task.comments = []
            state.projects[index].tasks.push(task)
            return state
        },
        updateTask: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === action.payload.task_id)
            let task = action.payload
            state.projects[indexProject].tasks[indexTask] = task
            return state
        },
        switchTask: (state, action) => {
            const indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            if (action.payload.destination && action.payload.source.droppableId !== action.payload.destination.droppableId) {
                const taskId = parseInt(action.payload.draggableId)
                const indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === taskId)
                state.projects[indexProject].tasks[indexTask].status = action.payload.destination.droppableId;
            }
            return state;
        },
        removeTask: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[indexProject].tasks = state.projects[indexProject].tasks.filter((task) => {
                return task.task_id !== action.payload
            })
            return state
        },
        addComment: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === action.payload.task_id)
            let comment = { comment_id: 0, message: action.payload.comment, member_id: action.payload.member_id }
            state.projects[indexProject].tasks[indexTask].comments.push(comment)
        },
        updateComment: () => {

        },
        removeComment: () => {

        }
    }
})

export const {
    addProject,
    updateProject,
    removeProject,
    setCurrentProject,
    unsetCurrentProject,
    addMember,
    updateMember,
    removeMember,
    addTask,
    updateTask,
    switchTask,
    removeTask,
    addComment,
    updateComment,
    removeComment
} = projectSlice.actions;

export default projectSlice.reducer;