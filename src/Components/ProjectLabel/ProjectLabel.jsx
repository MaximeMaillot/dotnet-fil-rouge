import React from 'react';
import "./ProjectLabel.css";

const ProjectLabel = ({project, setCurrentProject}) => {
    return (
        <div className='ProjectLabel' onClick={() => {
            setCurrentProject(project)
        }}>
            {project.name}
        </div>
    );
};

export default ProjectLabel;