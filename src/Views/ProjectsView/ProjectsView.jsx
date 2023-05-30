import React, { useEffect } from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/SidebarComponents/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../redux/slices/webstoreSlice';

const ProjectsView = () => {
    const dispatch = useDispatch();
    const webstore = useSelector(state => state.webstore)
    if (webstore.projects.length === 0 && webstore.currentUser !== undefined)  {
        console.log("enter")
        dispatch(getProjects());
    } else {
        console.log("else", webstore.projects.length, webstore.currentUser)
    }
    return (
        <div className='ProjectsView'>
            <Sidebar projects={webstore.projects} />
            {webstore.currentProject ? <Project project={webstore.currentProject} /> : <NoProject />}
        </div>
    );
};

export default ProjectsView;