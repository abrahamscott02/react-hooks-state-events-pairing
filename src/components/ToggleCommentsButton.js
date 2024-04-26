import React from 'react';

const ToggleCommentsButton = ({ commentsVisible, toggleCommentsVisibility }) => {
    return (
        <div className='toggle-comments-button'>
            <button onClick={toggleCommentsVisibility}>
                {commentsVisible ? 'Hide Comments' : 'Show Comments'}
            </button>
        </div>
    )
}
export default ToggleCommentsButton;