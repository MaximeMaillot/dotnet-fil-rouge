import React, { useState } from 'react';
import './CommentInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/slices/webstoreSlice';

const CommentInput = ({ task_id }) => {
    const currentUser = useSelector(state => state.webstore.currentUser)
    const [comment, setComment] = useState({
        message: "",
        user: currentUser
    })
    const dispatch = useDispatch()
    return (
        <div>
            <input type='text' value={comment} onChange={(event) => { setComment(event.target.value) }}></input>
            <button onClick={() => { if (comment.message !== "") dispatch(addComment({ task_id, comment })) }}>Envoyez</button>
        </div>
    );
};

export default CommentInput;