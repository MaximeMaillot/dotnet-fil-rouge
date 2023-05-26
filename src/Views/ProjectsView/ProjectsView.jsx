import React from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/SidebarComponents/Sidebar/Sidebar';

const ProjectsView = ({ projects }) => {
    return (
        <div className='ProjectsView'>
            <Sidebar projects={projects} />
            {projects.currentProject ? <Project project={projects.currentProject} /> : <NoProject />}
        </div>
    );
};

export default ProjectsView;