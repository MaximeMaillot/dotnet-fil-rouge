import React, { useState } from 'react';
import "./CreateTask.css";
import DescriptionInput from '../../DescriptionInput/DescriptionInput';
import UserTaskList from '../UserTaskList/UserTaskList';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/slices/webstoreSlice';

const CreateTask = ({ users = [], setTaskBoxDisplay, status }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    return (
        <div className='UpdateTask'>
            <UserTaskList users={users} />
            <h3>Créer une tâche</h3>
            <div className='wrap-nom-tache'>
                <label className='nom-tache'> Nom de la tâche : </label>
                <input className='input-nom' type='text' value={name} onChange={(event) => { setName(event.target.value) }}></input>
            </div>

            <DescriptionInput description={description} setDescription={setDescription} />

            <div className='wrap-boutons2'>
                <div className='UserTaskList-button2' onClick={() => {
                    if (name !== "" && description !== "") {
                        dispatch(addTask({ name, description, status }))
                        setTaskBoxDisplay(false)
                    }
                }}>Créer</div>
            </div>
            
            <div className='UserTaskList-button3' onClick={() => { setTaskBoxDisplay(false) }}>Annuler</div>
        </div>
    );
};

export default CreateTask;