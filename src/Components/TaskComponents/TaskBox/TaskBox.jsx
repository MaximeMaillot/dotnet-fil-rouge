import React from 'react';
import './TaskBox.css';
import CreateTask from '../CreateTask/CreateTask';
import UpdateTask from '../UpdateTask/UpdateTask';

function populateTaskBoxWithType(task, type, setTaskBoxDisplay, members) {
    switch (type) {
        case "create":
            return <CreateTask setTaskBoxDisplay={setTaskBoxDisplay}/>
        case "update":
            return <UpdateTask task={task} members={members} setTaskBoxDisplay={setTaskBoxDisplay}/>
        default:
            return undefined;
    }
}

const TaskBox = ({ task, type, setTaskBoxDisplay, members }) => {
    return (
        <div className='TaskBox'>
            {populateTaskBoxWithType(task,type, setTaskBoxDisplay, members)}
        </div>
    );
};

export default TaskBox;