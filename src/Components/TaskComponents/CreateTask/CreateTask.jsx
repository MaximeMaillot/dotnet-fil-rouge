import React, { useState } from 'react';
import "./CreateTask.css";
import DescriptionInput from '../../DescriptionInput/DescriptionInput';
import MemberTaskList from '../MemberTaskList/MemberTaskList';

const CreateTask = ({members = [], setTaskBoxDisplay}) => {
    const [description, setDescription] = useState("")
    return (
        <div>
            <MemberTaskList members={members} />
            <div>
            <label> Nom de la tâche
            <input type='text'></input>
            </label></div>
            <DescriptionInput description={description} setDescription={setDescription}/>
            <div><button>Créer</button><button onClick={() => {setTaskBoxDisplay(false)}}>Fermer</button></div>
        </div>
    );
};

export default CreateTask;