import React, { useEffect } from 'react';
import "./ProjectsView.css";
import Project from '../../Components/Project/Project';
import NoProject from '../../Components/NoProject/NoProject';
import Sidebar from '../../Components/SidebarComponents/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../redux/slices/webStoreSlice';
import { useNavigate } from 'react-router-dom';

const ProjectsView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const webstore = useSelector(state => state.webStore)
    useEffect(() => {
        if (webstore.currentUser === undefined) {
            navigate("/");
        }
        if (webstore.projects !== undefined && webstore.projects.length === 0 && webstore.currentUser !== undefined && webstore.loading === "idle") {
            dispatch(getProjects());
        }
    })
    return (
        <div className='ProjectsView'>
            {webstore.projects !== undefined ? webstore.projects.length > 0 ? <Sidebar projects={webstore.projects} /> : undefined : undefined}
            {webstore.currentProject ? <Project project={webstore.currentProject} /> : <NoProject />}
        </div>
    );
};

export default ProjectsView;