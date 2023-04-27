import React from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/Sidebar/Sidebar';

const ProjectsView = ({projects, currentProject, setCurrentProject}) => {
    return (
        <div className='ProjectsView'>
            <Sidebar projects={projects} setCurrentProject={setCurrentProject}/>
            {currentProject ? <Project project={currentProject}/> : <NoProject />}
        </div>
    );
};

export default ProjectsView;