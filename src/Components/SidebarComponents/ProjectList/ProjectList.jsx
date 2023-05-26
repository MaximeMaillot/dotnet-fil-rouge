import React from 'react';
import "./ProjectList.css";
import ProjectMenu from '../ProjectMenu/ProjectMenu';
import NewProjectInput from '../NewProjectInput/NewProjectInput';
import { useDispatch } from 'react-redux';
import { getProjects } from '../../../redux/slices/projectSlice';

const ProjectList = ({ projects, createProject, setCreateProject }) => {
    const dispatch = useDispatch();
    return (
        <div className='ProjectList'>
            <button onClick={() => {dispatch(getProjects())}}>COUCOU LE BOUTON</button>
            {projects ? projects.map((project) => {
                return <ProjectMenu key={project.id} project={project} />
            }) : undefined}
            {createProject ? <NewProjectInput setCreateProject={setCreateProject} /> : undefined}
        </div>
    );
};

export default ProjectList;