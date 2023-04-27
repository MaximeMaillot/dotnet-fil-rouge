import React from 'react';
import "./ProjectList.css";
import ProjectLabel from '../ProjectLabel/ProjectLabel';

const ProjectList = ({projects, setCurrentProject}) => {
    return (
        <div>
            {projects ? projects.map((project) => {
                return <ProjectLabel key={project.project_id} project={project} setCurrentProject={setCurrentProject} />
            }) : undefined}
        </div>
    );
};

export default ProjectList;