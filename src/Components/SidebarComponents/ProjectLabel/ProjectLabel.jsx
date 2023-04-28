import React from 'react';
import "./ProjectLabel.css";

const ProjectLabel = ({project, setCurrentProject}) => {
    return (
        <div className='ProjectLabel' onClick={() => {
            setCurrentProject(project)
            localStorage.setItem('currentProjectId', project.project_id);
        }}>
            {project.name}
        </div>
    );
};

export default ProjectLabel;