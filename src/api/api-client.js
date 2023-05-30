import axios from 'axios' // some http client lib

function getJWTToken() {
    return localStorage.getItem('jwt-token');
}

function createAxiosClient() {
    return axios.create({
        baseURL: process.env.REACT_APP_SERVICE_URI
    })
}

function getAuthenticationHeader() {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

function getClientOptions() {
    const options = getAuthenticationHeader();
    const jwtToken = getJWTToken();
    if (jwtToken.length > 0) {
        options.headers.Authorization = "Bearer " + jwtToken;
    }
    return options
}

// AUTHENTICATION //

// User need to contain an email and a password
export async function login(user) {
    return await createAxiosClient().post("/authentication/login", user, getAuthenticationHeader()).then((response) => {
        if (response.status === 400) {
            console.log("connection failed")
            return undefined;
        }
        return response.data
    }).catch(err => console.log(err));
}

// User need to contain : username, email and password
export async function register(user) {
    return await createAxiosClient().post("/authentication/register", user, getAuthenticationHeader()).then((response) => {
        if (response.status === 400) {
            console.log("register failed")
            return undefined;
        }
        return response.data
    }).catch(err => console.log(err));
}

export async function getTokenUser() {
    return await createAxiosClient().get("/authentication", getClientOptions()).then((response) => {
        console.log("responseApiClient", response)
        if (response.status === 401 || response.status === 403) {
            return undefined
        }
        return response.data
    }).catch(err => console.log(err));
}



// PROJECTS //

export async function getProject(projectId) {
    return await createAxiosClient().get("/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
    });
}

export async function getProjectsByUserId() {
    return await createAxiosClient().get("/project", getClientOptions()).then((response) => {
        return response.data
    }).catch(e => {
        console.log(e)
    });
}

export async function postProject(project) {
    return await createAxiosClient().post("/project", project, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function putProject(projectId, project) {
    return await createAxiosClient().put("/project/" + projectId, project, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function deleteProject(projectId) {
    return await createAxiosClient().delete("/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function postUserToProject(userId, projectId) {
    return await createAxiosClient().post("/user/" + userId + "/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
    });
}


// USERS //

export async function getUsersByProjectId(projectId) {
    return await createAxiosClient().get("/user/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
    });
}

export async function getUser(userId) {
    return await createAxiosClient().get("/user/" + userId, getClientOptions()).then((response) => {
        return response.data
    });
}

export async function deleteUser(userId) {
    return await createAxiosClient().delete("/user/" + userId, getClientOptions()).then((response) => {
        return response.data
    });
};

// TASKS //

export async function getTasksByProjectId(projectId) {
    return await createAxiosClient().get("/task/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
    });
}

export async function postTask(task) {
    return await createAxiosClient().post("/task", task, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function putTask(taskId, task) {
    return await createAxiosClient().put("/task/" + taskId, task, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function deleteTask(taskId) {
    return await createAxiosClient().delete("/task/" + taskId, getClientOptions()).then((response) => {
        return response.data
    });
};


// COMMENTS //

export async function getCommentsByTaskId(taskId) {
    return await createAxiosClient().get("/comment/task/" + taskId, getClientOptions()).then((response) => {
        return response.data
    });
}

export async function postComment(commentId) {
    return await createAxiosClient().post("/comment", commentId, getClientOptions()).then((response) => {
        return response.data
    });
};

export async function deleteComment(commentId) {
    return await createAxiosClient().delete("/comment/" + commentId, getClientOptions()).then((response) => {
        return response.data
    });
};

