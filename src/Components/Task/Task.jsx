import React from 'react';
import "./Task.css";

const Task = ({task}) => {
    return (
        <div className='Task'>
            {task.name}
        </div>
    );
};

export default Task;