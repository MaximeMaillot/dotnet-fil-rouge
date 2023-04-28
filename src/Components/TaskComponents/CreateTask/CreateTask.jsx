import React, { useState } from 'react';
import "./CreateTask.css";
import DescriptionInput from '../../DescriptionInput/DescriptionInput';

const CreateTask = ({task, setTaskBoxDisplay}) => {
    const [description, setDescription] = useState("")
    return (
        <div>
            <div>Liste des membres</div>
            <div>Modifier membres</div>
            <h3>{task.name}</h3>
            <DescriptionInput description={description} setDescription={setDescription}/>
            <button onClick={() => {setTaskBoxDisplay(false)}}>Fermer</button>
        </div>
    );
};

export default CreateTask;