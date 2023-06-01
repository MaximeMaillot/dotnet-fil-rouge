import React from 'react';
import './TaskBox.css';
import CreateTask from '../CreateTask/CreateTask';
import UpdateTask from '../UpdateTask/UpdateTask';
import { useSelector } from 'react-redux';

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

const TaskBox = ({ setTaskBoxDisplay }) => {
    const task = useSelector(state => state.temporaryStore.task)
    let type = "create";
    if (task !== undefined) {
        type = "update"
    }
    return (
            <div className='TaskBox'>
                {populateTaskBoxWithType(task, type, setTaskBoxDisplay)}
            </div>
    );
};

export default TaskBox;