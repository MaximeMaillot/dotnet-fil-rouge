import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks }) => {
    return (
        <div className='TaskList'>
            {tasks.map((task) => {
                return <Task key={task.task_id} task={task} />
            })}
        </div>
    );
};

export default TaskList;