import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ name, tasks }) => {
    return (
        <div className='TaskList'>
            <h3>{name}</h3>
            {tasks.map((task) => {
                return <Task key={task.task_id} task={task} />
            })}
        </div>
    );
};

export default TaskList;