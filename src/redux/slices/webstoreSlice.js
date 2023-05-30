import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, getTokenUser, getProjectsByUserId } from "../../api/api-client";

function getCurrentProjectArrayIndex(projects, id) {
    return projects.findIndex((project) => project.project_id === id)
}

export const getProjects = createAsyncThunk('projects/getProjects', async () => {
    return await getProjectsByUserId()
})


export const loginUser = createAsyncThunk('users/loginUser', async (user) => {
    return await login(user)
})

export const registerUser = createAsyncThunk('users/registerUser', async (user) => {
    return await register(user)
})

export const getUserByToken = createAsyncThunk('users/getTokenUser', async () => {
    return await getTokenUser()
})

export const projectSlice = createSlice({
    name: "webstore",
    initialState: {
        projects: [],
        currentProject: undefined,
        currentUser: undefined,
        loading: 'idle',
        error: null
    },
    extraReducers: (builder) => { // Async reducer for API
        // LOGIN
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.currentUser = action.payload.user
                localStorage.setItem("jwt-token", action.payload.token)
            }
            state.loading = 'idle'
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // REGISTER
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.currentUser = action.payload.user
                localStorage.setItem("jwt-token", action.payload.token);
            }
            state.loading = 'idle'
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // RETRIEVE TOKEN USER
        builder.addCase(getUserByToken.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getUserByToken.fulfilled, (state, action) => {
            console.log("Fulfilled", action)
            if (action.payload) {
                state.currentUser = action.payload
            }
            state.loading = 'idle'
        })
        builder.addCase(getUserByToken.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // PROJECT
        builder.addCase(getProjects.pending, (state, action) => {
            console.log("pending")
            state.loading = 'pending'
        })
        builder.addCase(getProjects.fulfilled, (state, action) => {
            console.log("fullfilled", action.payload)
            if (action.payload) {
                state.projects = action.payload
            }
            state.loading = 'idle'
        })
        builder.addCase(getProjects.rejected, (state, action) => {
            console.log("error")
            console.log(action)
            state.loading = 'idle'
            state.error = 'Error occured'
        })
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
            console.log(action.payload)
            state.currentProject = action.payload
            return state
        },
        unsetCurrentProject: (state) => {
            state.currentProject = undefined
            return state
        },
        addUser: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].users.push(action.payload)
            return state
        },
        updateUser: (state, action) => {
            // TODO
            return state
        },
        removeUser: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].users = state.projects[index].users.filter((user) => {
                return user !== action.payload
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
            let comment = { comment_id: 0, message: action.payload.comment, user_id: action.payload.user_id }
            state.projects[indexProject].tasks[indexTask].comments.push(comment)
        },
        updateComment: () => {

        },
        removeComment: () => {

        },
        disconnectUser: (state) => {
            state.currentUser = undefined
            localStorage.removeItem("jwt-token")
            return state
        }
    }
})

export const {
    addProject,
    updateProject,
    removeProject,
    setCurrentProject,
    unsetCurrentProject,
    addUser,
    updateUser,
    removeUser,
    addTask,
    updateTask,
    switchTask,
    removeTask,
    addComment,
    updateComment,
    removeComment,
    disconnectUser
} = projectSlice.actions;

export default projectSlice.reducer;