import axios from 'axios' // some http client lib

function getJWTToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiZXhwIjoxNjg1NTIwNDI3LCJpc3MiOiJGcmVkQXZNYXgiLCJhdWQiOiJGcmVkQXZNYXgifQ.U93ARss-WueWc3GI_t-nb6JcPkXeh-m8eaO_z3Fm3qY';
}

function createAxiosClient() {
    return axios.create({
        baseURL: process.env.REACT_APP_SERVICE_URI
      })
}

function getClientOptions() {
    return {
        headers: {
           Authorization: "Bearer " + getJWTToken()
        }
     }
}

// PROJECTS //

export async function getProject(projectId) {
    createAxiosClient().get("/project/" + projectId, getClientOptions()).then((response) => {
        return response.data.data
      });
}

export async function getProjectsByUserId(userId) {
    createAxiosClient.get("/project/user/" + userId, getClientOptions()).then((response) => {
        return response.data
      });
}

export async function postProject(project) {
    createAxiosClient.post("/project", project, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function putProject(projectId, project) {
    createAxiosClient.put("/project/" + projectId, project, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function deleteProject(projectId) {
    createAxiosClient.delete("/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
      });
};


// USERS //

export async function getUsersByProjectId(projectId) {
    createAxiosClient.get("/user/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
      });
}

export async function getUser(userId) {
    createAxiosClient.get("/user/" + userId, getClientOptions()).then((response) => {
        return response.data
      });
}

export async function postUser(user) {
    createAxiosClient.post("/user", user, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function deleteUser(userId) {
    createAxiosClient.delete("/user/" + userId, getClientOptions()).then((response) => {
        return response.data
      });
};

// TASKS //

export async function getTasksByProjectId(projectId) {
    createAxiosClient.get("/task/project/" + projectId, getClientOptions()).then((response) => {
        return response.data
      });
} 

export async function postTask(taskId) {
    createAxiosClient.post("/task", taskId, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function putTask(taskId, task) {
    createAxiosClient.put("/task/" + taskId, task, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function deleteTask(taskId) {
    createAxiosClient.delete("/task/" + taskId, getClientOptions()).then((response) => {
        return response.data
      });
};


// COMMENTS //

export async function getCommentsByTaskId(taskId) {
    createAxiosClient.get("/comment/task/" + taskId, getClientOptions()).then((response) => {
        return response.data
      });
}

export async function postComment(commentId) {
    createAxiosClient.post("/comment", commentId, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function deleteComment(commentId) {
    createAxiosClient.delete("/comment/" + commentId, getClientOptions()).then((response) => {
        return response.data
      });
};

