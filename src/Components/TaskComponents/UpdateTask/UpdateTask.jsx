import React from 'react';
import "./UpdateTask.css";
import CommentInput from '../../CommentInput/CommentInput';
import Comment from '../../Comment/Comment';
import DescriptionInput from '../../DescriptionInput/DescriptionInput';
import { useState } from 'react';
import MemberTaskList from '../MemberTaskList/MemberTaskList';

const UpdateTask = ({members, task, setTaskBoxDisplay}) => {
    const [description, setDescription] = useState(task.description)
    return (
        <div className='UpdateTask'>
            <MemberTaskList members={members} />
            <h3>{task.name}</h3>
            <DescriptionInput description={description} setDescription={setDescription} />
            <span>Modifier</span>
            <div>Commentaires</div>
            <CommentInput />
            {task.comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
            <button onClick={() => {setTaskBoxDisplay(false)}}>Fermer</button>
        </div>
    );
};

export default UpdateTask;