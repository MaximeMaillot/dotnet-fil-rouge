import React, { useState } from 'react';
import "./CreateTask.css";
import TaskBoxDescription from '../TaskBoxDescription/TaskBoxDescription';

const CreateTask = ({task, setTaskBoxDisplay}) => {
    const [description, setDescription] = useState("")
    return (
        <div>
            <div>Liste des membres</div>
            <div>Modifier membres</div>
            <h3>{task.name}</h3>
            <TaskBoxDescription description={description} setDescription={setDescription}/>
            <button onClick={() => {setTaskBoxDisplay(false)}}>Fermer</button>
        </div>
    );
};

export default CreateTask;