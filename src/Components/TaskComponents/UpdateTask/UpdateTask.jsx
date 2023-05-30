import React from 'react';
import "./UpdateTask.css";
import CommentInput from '../../CommentInput/CommentInput';
import Comment from '../../Comment/Comment';
import DescriptionInput from '../../DescriptionInput/DescriptionInput';
import { useState } from 'react';
import UserTaskList from '../UserTaskList/UserTaskList';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../redux/slices/projectSlice';

const UpdateTask = ({ users, task, setTaskBoxDisplay, status }) => {
    const [description, setDescription] = useState(task.description)
    const [dropDownStatus, setDropDownStatus] = useState(status)
    const dispatch = useDispatch();
    return (
        <div className='UpdateTask'>
            <UserTaskList users={users} />
            <h3>{task.name}</h3>
            <DescriptionInput description={description} setDescription={setDescription} />
            <div>Commentaires</div>
            <select value={dropDownStatus} onChange={(event) => { setDropDownStatus(event.target.value) }}>
                <option value={"pending"}>A faire</option>
                <option value={"ongoing"}>En cours</option>
                <option value={"done"}>Fini</option>
            </select>
            <CommentInput task_id={task.task_id} />
            {task.comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
            <button onClick={() => {
                let updatedTask = { ...task }
                updatedTask.status = dropDownStatus
                updatedTask.description = description
                dispatch(updateTask(
                    updatedTask
                ));
                setTaskBoxDisplay(false)
            }}>Mettre à jour</button>
            <button onClick={() => { setTaskBoxDisplay(false) }}>Fermer</button>
        </div>
    );
};

export default UpdateTask;