import React from 'react';
import "./Comment.css";

const Comment = ({comment}) => {
    return (
        <div className='Comment'>
            {comment.member_id} : {comment.message}
        </div>
    );
};

export default Comment;