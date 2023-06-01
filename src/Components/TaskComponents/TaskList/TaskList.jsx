import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { unSetStoreTask } from '../../../redux/slices/temporaryStoreSlice';

const TaskList = ({ name, tasks, setTaskBoxDisplay }) => {
    const dispatch = useDispatch();
    return (
        <Droppable droppableId={name}>
            {(provided, snapshot) => (
                <div className='TaskList' 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                >
                    <h3 className='TaskList-title'>{name}</h3>
                    {tasks.map((task, index) => {
                        return <Task key={task.id} task={task} index={index} setTaskBoxDisplay={setTaskBoxDisplay}/>
                    })}
                    {provided.placeholder}
                    <FontAwesomeIcon className='TaskList-icon' icon={faPlus} onClick={() => { setTaskBoxDisplay(true); dispatch(unSetStoreTask()) }} />
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;