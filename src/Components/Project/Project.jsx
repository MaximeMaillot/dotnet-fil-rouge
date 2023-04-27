import React from 'react';
import "./Project.css";
import TaskList from "./../TaskList/TaskList"

function getTasksByStatus(tasks, status) {
    return tasks.filter((task) => {
        return task.status === status
    })
}

const Project = ({ project }) => {
    return (
        <div className='Project'>
            <h2>{project.name}</h2>
            <div>
                <TaskList tasks={getTasksByStatus(project.tasks, "pending")} />
                <TaskList tasks={getTasksByStatus(project.tasks, "ongoing")} />
                <TaskList tasks={getTasksByStatus(project.tasks, "done")} />
            </div>
        </div>
    );
};

export default Project;