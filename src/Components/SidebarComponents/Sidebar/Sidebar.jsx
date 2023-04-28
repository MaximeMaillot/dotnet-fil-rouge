import React, { useState } from 'react';
import "./Sidebar.css";
import ProjectList from '../ProjectList/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectBox from '../ProjectBox/ProjectBox';

const Sidebar = ({projects, setCurrentProject}) => {
    const [projectBoxDisplay, setProjectBoxDisplay] = useState(false)
    return (
        <div className='Sidebar'>
            <div>Liste de projets <span><FontAwesomeIcon className='Sidebar-plus-icon' icon={faPlus} onClick={() => {setProjectBoxDisplay(true)}}/></span></div>
            <ProjectList projects={projects} setCurrentProject={setCurrentProject} />
            {projectBoxDisplay ? <ProjectBox setProjectBoxDisplay={setProjectBoxDisplay} /> : undefined}
        </div>
    );
};

export default Sidebar;