import React from 'react';
import "./Task.css";
import TaskBox from '../TaskBox/TaskBox';
import { useState } from 'react';

const Task = ({task}) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    return (
        <div className='Task' onClick={() => {setTaskBoxDisplay(!taskBoxDisplay)}}>
            <div>{task.name}</div>
            <div>{task.description}</div>
            {taskBoxDisplay ? <TaskBox task={task}/> : undefined}
        </div>
    );
};

export default Task;