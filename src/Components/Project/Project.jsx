import React from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { switchTask } from '../../redux/slices/projectSlice';

function handleEnd(e, dispatch) {
    dispatch(switchTask(e))
}


const Project = ({ project }) => {
    const dispatch = useDispatch();
    return (
        <div className='Project'>
            <h2 className='Project-title'>{project.name}</h2>
            <div className='Project-tasklist'>
                <DragDropContext onDragEnd={(e) => { handleEnd(e, dispatch) }}>
                    <TaskList name={"A faire"} project={project} status={"pending"} />
                    <TaskList name={"En cours"} project={project} status={"ongoing"} />
                    <TaskList name={"Fini"} project={project} status={"done"} />
                </DragDropContext>
            </div>
        </div>
    );
};

export default Project;