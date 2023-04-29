import React, { useState } from 'react';
import "./Sidebar.css";
import ProjectList from '../ProjectList/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ projects }) => {
    const [createProject, setCreateProject] = useState(false);
    return (
        <div className='Sidebar'>
            <div className='Sidebar-title'>Liste des projets <span><FontAwesomeIcon className='Sidebar-plus-icon' icon={faPlus} onClick={() => { setCreateProject(true) }} /></span></div>
            <ProjectList projects={projects} createProject={createProject} setCreateProject={setCreateProject} />
        </div>
    );
};

export default Sidebar;