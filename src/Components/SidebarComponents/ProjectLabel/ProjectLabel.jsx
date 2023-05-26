import React from 'react';
import "./ProjectLabel.css";

import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../../redux/slices/projectSlice';

const ProjectLabel = ({ project }) => {
    const dispatch = useDispatch();
    return (
        <div className='ProjectLabel' onClick={() => {
            dispatch(setCurrentProject(project))
        }}>
            {project.name}
        </div>
    );
};

export default ProjectLabel;