import React from 'react';
import "./Comment.css";

const Comment = ({comment}) => {
    console.log(comment)
    return (
        <div className='Comment'>
            {comment.user.name[0]} : {comment.message}
        </div>
    );
};

export default Comment;