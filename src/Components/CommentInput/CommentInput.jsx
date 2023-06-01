import React, { useState } from 'react';
import './CommentInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/slices/webStoreSlice';

const CommentInput = ({ task_id }) => {
    const currentUser = useSelector(state => state.webStore.currentUser)
    const [comment, setComment] = useState({
        message: "",
        user: currentUser
    })
    const dispatch = useDispatch()
    return (
        <div className='Comment'>
            <textarea className='zone-txt' value={comment} onChange={(event) => { setComment(event.target.value) }}/>
            <div className='btn-envoyer' onClick={() => { if (comment !== "") dispatch(addComment({ user_id: currentUser.id, comment, task_id })) }}>Envoyer</div>
        </div>
    );
};

export default CommentInput;