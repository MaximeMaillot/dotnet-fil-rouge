import React from 'react';
import "./Task.css";
import TaskBox from '../TaskBox/TaskBox';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons';
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, status, index }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    return (
        <Draggable draggableId={task.task_id + ""} index={index}>
            {(provided) => (
            <div ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            className='Task'>
                <div className='Task-name'>{task.name}</div>
                <div onClick={() => { setTaskBoxDisplay(true) }}><FontAwesomeIcon className='Task-icon' icon={faEye} /><FontAwesomeIcon className='Task-icon' icon={faComment} /></div>
                {taskBoxDisplay ? <TaskBox type={'update'} status={status} task={task} setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
            </div>
            )}
        </Draggable>
    );
};

export default Task;