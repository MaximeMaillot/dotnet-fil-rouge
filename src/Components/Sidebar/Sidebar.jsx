import React from 'react';
import "./Sidebar.css";
import ProjectList from '../ProjectList/ProjectList';

const Sidebar = ({projects}) => {
    return (
        <div>
            <div>Sidebar</div>
            <ProjectList projects={projects}/>
        </div>
    );
};

export default Sidebar;