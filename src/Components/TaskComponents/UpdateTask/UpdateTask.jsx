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
    const [isModify, setIsModify] = useState(false)
    return (
        <div className='UpdateTask'>
            <UserTaskList users={users} />

            {isModify ?
                <><input type='text' defaultValue={task.name}>
                </input> <button>valider</button> </>:
                <h3 onClick={() => { setIsModify(true) }}>{task.name}</h3>}

            <DescriptionInput description={description} setDescription={setDescription} />
            <div className='TitreCommentaires'>Commentaires : </div>

            {task.comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
            <CommentInput task_id={task.task_id} />



            <div className='wrap-boutons'>
                <select className='MenuDeroulant' value={dropDownStatus} onChange={(event) => { setDropDownStatus(event.target.value) }}>
                    <option value={"pending"}>À faire</option>
                    <option value={"ongoing"}>En cours</option>
                    <option value={"done"}>Fini</option>
                </select>
                <div className='bouton' onClick={() => {
                    let updatedTask = { ...task }
                    updatedTask.status = dropDownStatus
                    updatedTask.description = description
                    dispatch(updateTask(
                        updatedTask
                    ));
                    setTaskBoxDisplay(false)
                }}>Mettre à jour</div>
            </div>
            <div className='bouton2-update-task' onClick={() => { setTaskBoxDisplay(false) }}>Fermer</div>
        </div>
    );
};

export default UpdateTask;