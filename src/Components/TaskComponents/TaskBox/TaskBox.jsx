import React from 'react';
import './TaskBox.css';
import CreateTask from '../CreateTask/CreateTask';
import UpdateTask from '../UpdateTask/UpdateTask';

function populateTaskBoxWithType(task, type, setTaskBoxDisplay) {
    switch (type) {
        case "create":
            return <CreateTask task={task} setTaskBoxDisplay={setTaskBoxDisplay}/>
        case "update":
            return <UpdateTask task={task} setTaskBoxDisplay={setTaskBoxDisplay}/>
        default:
            return undefined;
    }
}

const TaskBox = ({ task, type, setTaskBoxDisplay }) => {
    return (
        <div className='TaskBox'>
            {populateTaskBoxWithType(task,type, setTaskBoxDisplay)}
        </div>
    );
};

export default TaskBox;