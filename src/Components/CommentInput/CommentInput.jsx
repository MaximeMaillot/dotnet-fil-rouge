import React, { useState } from 'react';
import './CommentInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/slices/projectSlice';

const CommentInput = ({ task_id }) => {
    const members = useSelector(state => state.members)
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <input type='text' value={comment} onChange={(event) => { setComment(event.target.value) }}></input>
            <button onClick={() => { dispatch(addComment({ member_id: members.currentMemberId, comment, task_id })) }}>Envoyez</button>
        </div>
    );
};

export default CommentInput;