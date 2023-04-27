import React from 'react';
import "./Task.css";

const Task = ({task}) => {
    return (
        <div className='Task'>
            nom : {task.name}
        </div>
    );
};

export default Task;