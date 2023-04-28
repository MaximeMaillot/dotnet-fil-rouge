import React from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/SidebarComponents/Sidebar/Sidebar';

const ProjectsView = ({projects, setProjects, currentProject, setCurrentProject}) => {
    return (
        <div className='ProjectsView'>
            <Sidebar projects={projects} setProjects={setProjects} setCurrentProject={setCurrentProject}/>
            {currentProject ? <Project projects={projects} setProjects={setProjects} project={currentProject}/> : <NoProject />}
        </div>
    );
};

export default ProjectsView;