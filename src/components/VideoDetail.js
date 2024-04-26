import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <div className='video-detail'>
            <h2>{video.title}</h2>
            <p>{video.views}</p>
            <div className='buttons'>
                <button onClick={video.like}>👍 {video.upvotes}</button>
                <button onClick={video.dislike}>👎 {video.downvotes}</button>
            </div>
        </div>
    )
}

export default VideoDetail;