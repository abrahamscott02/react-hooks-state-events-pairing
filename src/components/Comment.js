import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div className='comment'>
            <p>
                <strong>{comment.user}</strong>: {comment.comment}
            </p>
        </div>
    )
}

export default Comment;