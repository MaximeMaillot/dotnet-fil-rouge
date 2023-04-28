import React from 'react';
import './ProjectMenu.css';
import ProjectLabel from "./../ProjectLabel/ProjectLabel"

const ProjectMenu = ({project, setCurrentProject}) => {
    const currentProject = localStorage.getItem('currentProjectId')
    return (
        <div className='ProjectMenu'>
            <ProjectLabel key={project.project_id} project={project} setCurrentProject={setCurrentProject} />
            {project.project_id == currentProject ? <div className='ProjectMenu-members'>members</div> : undefined}
        </div>
    );
};

export default ProjectMenu;