import React from 'react';
import "./Sidebar.css";
import ProjectList from '../ProjectList/ProjectList';

const Sidebar = ({projects, setCurrentProject}) => {
    return (
        <div className='Sidebar'>
            <div>Sidebar</div>
            <ProjectList projects={projects} setCurrentProject={setCurrentProject} />
        </div>
    );
};

export default Sidebar;