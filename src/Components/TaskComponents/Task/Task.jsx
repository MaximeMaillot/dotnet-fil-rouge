import React from 'react';
import "./Task.css";
import TaskBox from '../TaskBox/TaskBox';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Task = ({task}) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    const [taskBoxType, setTaskBoxType] = useState(undefined)
    return (
        <div className='Task'>
            <div onClick={() => {setTaskBoxType("update"); setTaskBoxDisplay(true)}}>{task.name}</div>
            <div>{task.description}</div>
            <FontAwesomeIcon className='Task-plus-icon' icon={faPlus} onClick={() => {setTaskBoxType("create"); setTaskBoxDisplay(true)}}/>
            {taskBoxDisplay ? <TaskBox type={taskBoxType} task={task} setTaskBoxDisplay={setTaskBoxDisplay}/> : undefined}
        </div>
    );
};

export default Task;