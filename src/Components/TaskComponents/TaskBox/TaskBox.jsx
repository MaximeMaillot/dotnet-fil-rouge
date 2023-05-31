import React from 'react';
import './TaskBox.css';
import CreateTask from '../CreateTask/CreateTask';
import UpdateTask from '../UpdateTask/UpdateTask';

function populateTaskBoxWithType(task, type, setTaskBoxDisplay) {
    switch (type) {
        case "create":
            return <CreateTask status={0} setTaskBoxDisplay={setTaskBoxDisplay} />
        case "update":
            return <UpdateTask status={task.status} task={task} setTaskBoxDisplay={setTaskBoxDisplay} />
        default:
            return undefined;
    }
}

const TaskBox = ({ task, type, setTaskBoxDisplay }) => {
    return (
        <div className='FondTranslucide'>
            <div className='TaskBox'>
                {populateTaskBoxWithType(task, type, setTaskBoxDisplay)}
            </div>
        </div>

    );
};

export default TaskBox;