import React from 'react';
import "./Comment.css";

const Comment = ({comment}) => {
    return (
        <div className='Comment'>
            nom : {comment.name}
        </div>
    );
};

export default Comment;