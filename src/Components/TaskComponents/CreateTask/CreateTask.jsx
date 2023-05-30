import React, { useState } from 'react';
import "./CreateTask.css";
import DescriptionInput from '../../DescriptionInput/DescriptionInput';
import UserTaskList from '../UserTaskList/UserTaskList';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/slices/projectSlice';

const CreateTask = ({ users = [], setTaskBoxDisplay, status }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    return (
        <div>
            <UserTaskList users={users} />
            <div>
                <label> Nom de la tâche
                    <input type='text' value={name} onChange={(event) => { setName(event.target.value) }}></input>
                </label>
            </div>
            <DescriptionInput description={description} setDescription={setDescription} />
            <div>
                <button onClick={() => {
                    if (name !== "" && description !== "") {
                        dispatch(addTask({ name, description, status }))
                        setTaskBoxDisplay(false)
                    }
                }}>Créer</button>
                <button onClick={() => { setTaskBoxDisplay(false) }}>Annuler</button>
            </div>
        </div>
    );
};

export default CreateTask;