import React, { useState } from 'react';
import "./Sidebar.css";
import ProjectList from '../ProjectList/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ projects }) => {
    const [createProject, setCreateProject] = useState(false);
    return (
        <div className='Sidebar'>
                <div className='Sidebar-title'>
                    <div className='title'>Nouveau projet</div>
                    <div className='Sidebar-plus-icon' ><FontAwesomeIcon icon={faPlus} onClick={() => { setCreateProject(true) }} /></div>
                </div>
                <ProjectList projects={projects} createProject={createProject} setCreateProject={setCreateProject} />
        </div>
    );
};

export default Sidebar;