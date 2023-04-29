import React from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"

const Project = ({ projects }) => {
    const project = projects.projects.find((project) => project.project_id === projects.currentProjectId)
    return (
        <div className='Project'>
            <h2 className='Project-title'>{project.name}</h2>
            <div className='Project-tasklist'>
                <TaskList name={"A faire"} project={project} status={"pending"} />
                <TaskList name={"En cours"} project={project} status={"ongoing"} />
                <TaskList name={"Fini"} project={project} status={"done"} />
            </div>
        </div>
    );
};

export default Project;