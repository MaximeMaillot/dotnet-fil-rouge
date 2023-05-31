import React from 'react';
import "./ProjectLabel.css";

import { useDispatch } from 'react-redux';
import { getCurrentProjectTasks, getCurrentProjectUsers, setCurrentProject } from '../../../redux/slices/webstoreSlice';

const ProjectLabel = ({ project }) => {
    const dispatch = useDispatch();
    return (
        <div className='ProjectLabel' onClick={() => {
            dispatch(setCurrentProject(project))
            dispatch(getCurrentProjectTasks(project.id))
            dispatch(getCurrentProjectUsers(project.id))
        }}>
            {project.name}
        </div>
    );
};

export default ProjectLabel;