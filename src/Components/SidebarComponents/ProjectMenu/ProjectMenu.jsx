import React from 'react';
import './ProjectMenu.css';
import ProjectLabel from "./../ProjectLabel/ProjectLabel"
import { useSelector } from 'react-redux';

const ProjectMenu = ({ project, setCurrentProject }) => {
    const projects = useSelector(state => state.projects)
    return (
        <div className='ProjectMenu'>
            <ProjectLabel key={project.project_id} project={project} setCurrentProject={setCurrentProject} />
            {project.project_id === projects.currentProjectId ? <div className='ProjectMenu-members'>members</div> : undefined}
        </div>
    );
};

export default ProjectMenu;