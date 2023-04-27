import React from 'react';
import "./ProjectLabel.css";

const ProjectLabel = ({project}) => {
    return (
        <div className='ProjectLabel'>
            {project.name}
        </div>
    );
};

export default ProjectLabel;