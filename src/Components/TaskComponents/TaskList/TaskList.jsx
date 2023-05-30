import React, { useState } from 'react';
import './TaskList.css';
import Task from '../Task/Task';
import TaskBox from '../TaskBox/TaskBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Droppable } from "react-beautiful-dnd";

function getTasksByStatus(tasks, status) {
    return tasks.filter((task) => {
        return task.status === status
    })
}

const TaskList = ({ name, status, project }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    const tasks = getTasksByStatus(project.tasks, status)
    return (
        <Droppable droppableId={status}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className='TaskList'>
                    <h3 className='TaskList-title'>{name}</h3>
                    {tasks.map((task, index) => {
                        return <Task key={task.task_id} task={task} status={status} index={index}/>
                    })}
                    {provided.placeholder}
                    <FontAwesomeIcon className='TaskList-icon' icon={faPlus} onClick={() => { setTaskBoxDisplay(true) }} />
                    {taskBoxDisplay ? <TaskBox status={status} type={'create'} setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;