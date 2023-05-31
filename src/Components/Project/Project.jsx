import React from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { switchTask } from '../../redux/slices/webstoreSlice';

function handleEnd(e, dispatch) {
    dispatch(switchTask(e))
}

function getCurrentTasksByStatus(project, status) {
    return project.tasks.filter(task => {
        return task.status === status
    })
}

function getStatusName(status) {
    switch(status) {
        case 0:
            return "A faire"
        case 1:
            return "En cours"
        case 2:
            return "Fini"
        default:
            return "Bug"
    }
}

const Project = ({ project }) => {
    const statusList = [0, 1, 2]
    const dispatch = useDispatch();
    return (
        <div className='Project'>
            <h2 className='Project-title'>{project.name}</h2>
            <div className='Project-tasklist'>
                <DragDropContext onDragEnd={(e) => { handleEnd(e, dispatch) }}>
                    {statusList.map((status, index) => {
                        return <TaskList key={index} name={getStatusName(status)} tasks={getCurrentTasksByStatus(project, status)} taskListId={status} />
                    })}
                </DragDropContext>
            </div>
        </div>
    );
};

export default Project;