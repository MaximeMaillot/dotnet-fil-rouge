import React from 'react';
import "./ProjectList.css";
import ProjectMenu from '../ProjectMenu/ProjectMenu';
import NewProjectInput from '../NewProjectInput/NewProjectInput';

const ProjectList = ({projects, setCurrentProject, createProject, setCreateProject}) => {
    return (
        <div className='ProjectList'>
            {projects ? projects.map((project) => {
                return <ProjectMenu key={project.project_id} project={project} setCurrentProject={setCurrentProject} />
            }) : undefined}
            {createProject ? <NewProjectInput setCreateProject={setCreateProject} /> : undefined}
        </div>
    );
};

export default ProjectList;