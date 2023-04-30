import React from 'react';
import "./Task.css";
import TaskBox from '../TaskBox/TaskBox';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons';

const Task = ({ task, status }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    return (
        <div className='Task'>
            <div className='Task-name'>{task.name}</div>
            <div onClick={() => { setTaskBoxDisplay(true) }}><FontAwesomeIcon className='Task-icon' icon={faEye} /><FontAwesomeIcon className='Task-icon' icon={faComment} /></div>
            {taskBoxDisplay ? <TaskBox type={'update'} status={status} task={task} setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
        </div>
    );
};

export default Task;