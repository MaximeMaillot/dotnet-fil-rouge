import React, { useState } from 'react';
import './TaskList.css';
import Task from '../Task/Task';
import TaskBox from '../TaskBox/TaskBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ name, tasks }) => {
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    return (
        <Droppable droppableId={name}>
            {(provided, snapshot) => (
                <div className='TaskList' 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                >
                    <h3 className='TaskList-title'>{name}</h3>
                    {tasks.map((task, index) => {
                        return <Task key={task.id} task={task} index={index}/>
                    })}
                    {provided.placeholder}
                    <FontAwesomeIcon className='TaskList-icon' icon={faPlus} onClick={() => { setTaskBoxDisplay(true) }} />
                    {taskBoxDisplay ? <TaskBox type={'create'} setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;