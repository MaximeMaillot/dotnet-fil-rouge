import React, { Fragment, useState } from 'react';
import "./Project.css";
import TaskList from "./../TaskComponents/TaskList/TaskList"
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { switchTask } from '../../redux/slices/webStoreSlice';
import TaskBox from '../TaskComponents/TaskBox/TaskBox';

function handleEnd(e, dispatch) {
    dispatch(switchTask(e))
}

function getCurrentTasksByStatus(project, status) {
    return project.tasks.filter(task => {
        return task.status === status
    })
}

function getStatusName(status) {
    switch (status) {
        case 0:
            return "À faire"
        case 1:
            return "En cours"
        case 2:
            return "Fini"
        default:
            return "Bug"
    }
}

const Project = ({ project }) => {
    const statusList = [0, 1, 2]
    const dispatch = useDispatch();
    const [taskBoxDisplay, setTaskBoxDisplay] = useState(false)
    return (
        <div className={taskBoxDisplay ? 'Project FondTranslucide' : 'Project'} >
            <h3 className={taskBoxDisplay ? 'Project-title ChildTransparent' : 'Project-title'}>{project.name}</h3>
            <div className='Project-tasklist'>
                <DragDropContext onDragEnd={(e) => { handleEnd(e, dispatch) }}>
                    {statusList.map((status, index) => {
                        return <TaskList
                            key={index} 
                            taskBoxDisplay={taskBoxDisplay}
                            name={getStatusName(status)}
                            tasks={getCurrentTasksByStatus(project, status)}
                            taskListId={status}
                            setTaskBoxDisplay={setTaskBoxDisplay} />
                    })}
                </DragDropContext>
            </div>
            {taskBoxDisplay ? <TaskBox setTaskBoxDisplay={setTaskBoxDisplay} /> : undefined}
        </div>
    );
};

export default Project;