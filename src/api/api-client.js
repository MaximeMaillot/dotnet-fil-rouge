import axios from 'axios' // some http client lib

const baseUri = process.env.REACT_APP_SERVICE_URI;

function getJWTToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiZXhwIjoxNjg1NTIwNDI3LCJpc3MiOiJGcmVkQXZNYXgiLCJhdWQiOiJGcmVkQXZNYXgifQ.U93ARss-WueWc3GI_t-nb6JcPkXeh-m8eaO_z3Fm3qY';
}

function createAxiosClient() {
    return axios.create({
        baseURL: baseUri
      })
}

function getClientOptions() {
    return {
        headers: {
           Authorization: "Bearer " + getJWTToken()
        }
     }
}

export async function getCurrentProject(id) {
    createAxiosClient().get("/project/" + id, getClientOptions()).then((response) => {
        return response.data.data
      });
}

export async function getAllProjects() {
    createAxiosClient.get("/project", getClientOptions()).then((response) => {
        return response.data
      });
}

export async function postProject(project) {
    createAxiosClient.post("/project", project, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function putProject(id, project) {
    createAxiosClient.put("/project/" + id, project, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function deleteProject(id) {
    createAxiosClient.post("/project", project, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function addUser(user) {
    createAxiosClient.post("/user", user, getClientOptions()).then((response) => {
        return response.data
      });
};

export async function removeUser(id) {};

export async function addTask(task) {};

export async function updateTask(id, task) {};

export async function addComment(comment) {};

export async function removeComment(id) {};

