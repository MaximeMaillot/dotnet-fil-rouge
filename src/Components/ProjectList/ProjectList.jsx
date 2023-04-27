import React from 'react';
import "./ProjectList.css";
import ProjectLabel from '../ProjectLabel/ProjectLabel';

const ProjectList = ({projects}) => {
    return (
        <div>
            {projects ? projects.map((project) => {
                <ProjectLabel key={project.project_id} project={project} />
            }) : undefined}
        </div>
    );
};

export default ProjectList;