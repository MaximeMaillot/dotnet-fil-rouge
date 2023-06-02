import React from 'react';
import './ProjectMenu.css';
import ProjectLabel from "./../ProjectLabel/ProjectLabel"
import { useSelector} from 'react-redux';


const ProjectMenu = ({ project, setCurrentProject }) => {
    const currentProject = useSelector(state => state.webStore.currentProject)
    return (
        <div className='ProjectMenu'>
            <ProjectLabel key={project.id} project={project} setCurrentProject={setCurrentProject} />
            {currentProject ? project.id === currentProject.id ? <div className='ProjectMenu-users'>{currentProject.users.map((user, index) => {
                return <div className='user' key={index}>{user.name[0]}</div>
            })}</div> : undefined : undefined}
        </div>
    );
};

export default ProjectMenu;