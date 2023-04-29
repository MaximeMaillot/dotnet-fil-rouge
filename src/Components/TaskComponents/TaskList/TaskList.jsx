import React, { useState } from 'react';
import './TaskList.css';
import Task from '../Task/Task';
import TaskBox from '../TaskBox/TaskBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function getTasksByStatus(tasks, status) {
    return tasks.filter((task) => {
        return task.status === status
    })
}

const TaskList = ({ name, status, project }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    const tasks = getTasksByStatus(project.tasks, status)
    return (
        <div className='TaskList'>
            <h3 className='TaskList-title'>{name}</h3>
            {tasks.map((task) => {
                return <Task key={task.task_id} members={project.members} task={task} />
            })}
            <FontAwesomeIcon className='TaskList-icon' icon={faPlus} onClick={() => { setTaskBoxDisplay(true) }} />
            {taskBoxDisplay ? <TaskBox type={'create'} setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
        </div>
    );
};

export default TaskList;