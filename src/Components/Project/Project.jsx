import React from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"

function getTasksByStatus(tasks, status) {
    return tasks.filter((task) => {
        return task.status === status
    })
}

const Project = ({ projects, setProjects, project }) => {
    return (
        <div className='Project'>
            <h2 className='Project-title'>{project.name}</h2>
            <div className='Project-tasklist'>
                <TaskList name={"A faire"} tasks={getTasksByStatus(project.tasks, "pending")} members={project.members}/>
                <TaskList name={"En cours"} tasks={getTasksByStatus(project.tasks, "ongoing")} members={project.members}/>
                <TaskList name={"Fini"} tasks={getTasksByStatus(project.tasks, "done")} members={project.members} />
            </div>
        </div>
    );
};

export default Project;