import React, { useState } from 'react';
import './TaskList.css';
import Task from '../Task/Task';
import TaskBox from '../TaskBox/TaskBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ name, tasks, members }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    
    return (
        <div className='TaskList'>
            <h3  className='TaskList-title'>{name}</h3>
            {tasks.map((task) => {
                return <Task key={task.task_id} members={members} task={task} />
            })}
            <FontAwesomeIcon className='TaskList-icon' icon={faPlus} onClick={() => {setTaskBoxDisplay(true)}}/>
            {taskBoxDisplay ? <TaskBox type={'create'} setTaskBoxDisplay={setTaskBoxDisplay}/> : undefined}
        </div>
    );
};

export default TaskList;