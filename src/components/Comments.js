import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
    return (
        <div className='comments'>
            <h3>Comments</h3>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    )
}

export default Comments;
