import React from 'react';
import "./Task.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons';
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { setStoreTask } from '../../../redux/slices/temporaryStoreSlice';

const Task = ({ task, index, setTaskBoxDisplay }) => {
    const dispatch = useDispatch();
    return (
        <Draggable draggableId={task.id + ""} index={index} key={task.id}>
            {(provided) => (
            <div 
            key= {index}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            className='Task'>
                <div className='Task-name'>{task.name}</div>
                <div onClick={() => { setTaskBoxDisplay(true); dispatch(setStoreTask(task)) }}><FontAwesomeIcon className='Task-icon' icon={faEye} /><FontAwesomeIcon className='Task-icon' icon={faComment} /></div>
            </div>
            )}
        </Draggable>
    );
};

export default Task;