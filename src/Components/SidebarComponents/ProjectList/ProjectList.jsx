import React from 'react';
import "./ProjectList.css";
import ProjectMenu from '../ProjectMenu/ProjectMenu';
import NewProjectInput from '../NewProjectInput/NewProjectInput';

const ProjectList = ({ projects, createProject, setCreateProject }) => {
    return (
        <div className='ProjectList'>
            {projects.projects ? projects.projects.map((project) => {
                return <ProjectMenu key={project.project_id} project={project} />
            }) : undefined}
            {createProject ? <NewProjectInput setCreateProject={setCreateProject} /> : undefined}
        </div>
    );
};

export default ProjectList;