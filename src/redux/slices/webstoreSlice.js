import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, getTokenUser, getProjectsByUserId, getTasksByProjectId, getUsersByProjectId, getCommentsByTaskId } from "../../api/api-client";

function getCurrentProjectArrayIndex(projects, id) {
    return projects.findIndex((project) => project.project_id === id)
}

export const getProjects = createAsyncThunk('project/getProjects', async () => {
    return await getProjectsByUserId()
})

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
    return await login(user)
})

export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    return await register(user)
})

export const getUserByToken = createAsyncThunk('user/getTokenUser', async () => {
    return await getTokenUser()
})

export const getCurrentProjectTasks = createAsyncThunk('project/getTasksByProject', async (projectId) => {
    return await getTasksByProjectId(projectId)
})

export const getCurrentProjectUsers = createAsyncThunk('project/getUsersByProject', async (projectId) => {
    return await getUsersByProjectId(projectId)
})

export const getCurrentTaskComments = createAsyncThunk('comment/getUsersByProject', async (taskId) => {
    return await getCommentsByTaskId(taskId)
})

export const projectSlice = createSlice({
    name: "webstore",
    initialState: {
        projects: localStorage.getItem("store") !== null ? JSON.parse(localStorage.getItem("store")).projects : [],
        currentProject: localStorage.getItem("store") !== null ? JSON.parse(localStorage.getItem("store")).currentProject : undefined,
        currentUser: localStorage.getItem("store") !== null ? JSON.parse(localStorage.getItem("store")).currentUser : undefined,
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
                localStorage.setItem("store", JSON.stringify(state))
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
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // RETRIEVE USER BY TOKEN
        builder.addCase(getUserByToken.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getUserByToken.fulfilled, (state, action) => {
            if (action.payload) {
                state.currentUser = action.payload
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(getUserByToken.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // PROJECT
        builder.addCase(getProjects.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getProjects.fulfilled, (state, action) => {
            if (action.payload) {
                state.projects = action.payload
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(getProjects.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // TASK
        builder.addCase(getCurrentProjectTasks.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getCurrentProjectTasks.fulfilled, (state, action) => {
            if (action.payload) {
                // Update current project
                state.currentProject.tasks = action.payload
                // update projects with current project new data
                for (let i = 0; i < state.projects.length; i++) {
                    if (state.projects[i].id === state.currentProject.id) {
                        state.projects[i] = state.currentProject
                        break;
                    }
                }
                // update store
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(getCurrentProjectTasks.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // Users
        builder.addCase(getCurrentProjectUsers.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getCurrentProjectUsers.fulfilled, (state, action) => {
            if (action.payload) {
                // Update current project
                state.currentProject.users = action.payload
                // update projects with current project new data
                for (let i = 0; i < state.projects.length; i++) {
                    if (state.projects[i].id === state.currentProject.id) {
                        state.projects[i] = state.currentProject
                        break;
                    }
                }
                // update store
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(getCurrentProjectUsers.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
        // Comments
        builder.addCase(getCurrentTaskComments.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(getCurrentTaskComments.fulfilled, (state, action) => {
            console.log(action)
            if (action.payload) {
                // Update current project
                state.currentProject.tasks = action.payload
                // update projects with current project new data
                for (let i = 0; i < state.projects.length; i++) {
                    if (state.projects[i].id === state.currentProject.id) {
                        state.projects[i] = state.currentProject
                        break;
                    }
                }
                // update store
                localStorage.setItem("store", JSON.stringify(state))
            }
            state.loading = 'idle'
        })
        builder.addCase(getCurrentTaskComments.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = 'Error occured'
        })
    },
    reducers: {
        //@deprecated
        addProject: (state, action) => {
            state.projects = [...state.projects, action.payload]
            return state
        },
        //@deprecated
        updateProject: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index] = action.payload
            return state
        },
        //@deprecated
        removeProject: (state, action) => {
            state.projects = state.projects.filter((project) => {
                return project.project_id !== action.payload
            })
            return state
        },
        setCurrentProject: (state, action) => {
            state.currentProject = action.payload
            localStorage.setItem("store", JSON.stringify(state))
            return state
        },
        unsetCurrentProject: (state) => {
            state.currentProject = undefined
            localStorage.setItem("store", JSON.stringify(state))
            return state
        },
        //@deprecated
        addUser: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].users.push(action.payload)
            return state
        },
        //@deprecated
        updateUser: (state, action) => {
            // TODO
            return state
        },
        //@deprecated
        removeUser: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[index].users = state.projects[index].users.filter((user) => {
                return user !== action.payload
            })
            return state
        },
        //@deprecated
        addTask: (state, action) => {
            let index = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let task = action.payload
            task.task_id = state.projects[index].tasks.reduce((prev, current) => (prev.y > current.y) ? prev : current).task_id + 1
            task.comments = []
            state.projects[index].tasks.push(task)
            return state
        },
        //@deprecated
        updateTask: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === action.payload.task_id)
            let task = action.payload
            state.projects[indexProject].tasks[indexTask] = task
            return state
        },
        //@deprecated
        switchTask: (state, action) => {
            const indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            if (action.payload.destination && action.payload.source.droppableId !== action.payload.destination.droppableId) {
                const taskId = parseInt(action.payload.draggableId)
                const indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === taskId)
                state.projects[indexProject].tasks[indexTask].status = action.payload.destination.droppableId;
            }
            return state;
        },
        //@deprecated
        removeTask: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            state.projects[indexProject].tasks = state.projects[indexProject].tasks.filter((task) => {
                return task.task_id !== action.payload
            })
            return state
        },
        //@deprecated
        addComment: (state, action) => {
            let indexProject = getCurrentProjectArrayIndex(state.projects, state.currentProjectId)
            let indexTask = state.projects[indexProject].tasks.findIndex((task) => task.task_id === action.payload.task_id)
            let comment = { comment_id: 0, message: action.payload.comment, user_id: action.payload.user_id }
            state.projects[indexProject].tasks[indexTask].comments.push(comment)
        },
        //@deprecated
        updateComment: () => {

        },
        //@deprecated
        removeComment: () => {

        },
        disconnectUser: (state) => {
            state.currentUser = undefined
            localStorage.removeItem("jwt-token")
            localStorage.removeItem("store")
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