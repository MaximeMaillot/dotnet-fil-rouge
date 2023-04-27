import React from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/Sidebar/Sidebar';

// TODO
function getCurrentProject(projects) {
    if (projects && projects.length > 0) {
        return projects[0] ;
    }
    return undefined;
}

const ProjectsView = ({projects}) => {
    return (
        <div>
            <Sidebar projects={projects}/>
            {getCurrentProject(projects) ? <Project project={getCurrentProject(projects)}/> : <NoProject />}
        </div>
    );
};

export default ProjectsView;