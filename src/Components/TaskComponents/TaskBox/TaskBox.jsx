import React, { useEffect } from 'react';
import './TaskBox.css';
import CreateTask from '../CreateTask/CreateTask';
import UpdateTask from '../UpdateTask/UpdateTask';

function populateTaskBoxWithType(task, type, setTaskBoxDisplay, status) {
    switch (type) {
        case "create":
            return <CreateTask status={status} setTaskBoxDisplay={setTaskBoxDisplay} />
        case "update":
            return <UpdateTask status={status} task={task} setTaskBoxDisplay={setTaskBoxDisplay} />
        default:
            return undefined;
    }
}

const TaskBox = ({ task, type, setTaskBoxDisplay }) => {
    return (
        <div className='FondTranslucide'>
            <div className='TaskBox'>
                {populateTaskBoxWithType(task, type, setTaskBoxDisplay, task.status)}
            </div>
        </div>

    );
};

export default TaskBox;