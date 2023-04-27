import React from 'react';
import './TaskBox.css';
import Comment from "../Comment/Comment"
import CommentInput from '../CommentInput/CommentInput';

const TaskBox = ({ task }) => {
    return (
        <div className='TaskBox'>
            <div>Liste des membres</div>
            <div>Modifier membres</div>
            <h3>{task.name}</h3>
            <div>Déscriptif</div>
            <div className='Taskbox-description'>{task.description}</div>
            <span>Modifier</span>
            <div>Commentaires</div>
            <CommentInput />
            {task.comments.map((comment) => {
                return <Comment key={comment.comment_id} comment={comment} />
            })}
        </div>
    );
};

export default TaskBox;