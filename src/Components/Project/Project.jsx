import React from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { switchTask } from '../../redux/slices/projectSlice';

function handleEnd(e, dispatch) {
    dispatch(switchTask(e))
}


const Project = ({ projects }) => {
    const project = projects.projects.find((project) => project.project_id === projects.currentProjectId)
    const dispatch = useDispatch();
    return (
        <div className='Project'>
            <h3 className='Project-title'>{project.name}</h3>
            <div className='Project-tasklist'>
                <DragDropContext onDragEnd={(e) => { handleEnd(e, dispatch) }}>
                    <TaskList name={"À faire"} project={project} status={"pending"} />
                    <TaskList name={"En cours"} project={project} status={"ongoing"} />
                    <TaskList name={"Fini"} project={project} status={"done"} />
                </DragDropContext>
            </div>
        </div>
    );
};

export default Project;