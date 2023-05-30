import React from 'react';
import './ProjectMenu.css';
import ProjectLabel from "./../ProjectLabel/ProjectLabel"
import { useSelector} from 'react-redux';


const ProjectMenu = ({ project, setCurrentProject }) => {
    const currentProject = useSelector(state => state.webstore.currentProject)
    return (
        <div className='ProjectMenu'>
            <ProjectLabel key={project.id} project={project} setCurrentProject={setCurrentProject} />
            {currentProject ? project.project_id === currentProject.id ? <div className='ProjectMenu-users'>Membres</div> : undefined : undefined}
        </div>
    );
};

export default ProjectMenu;