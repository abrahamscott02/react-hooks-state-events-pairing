import React from 'react';
import VideoDetail from './VideoDetail';

const VideoPlayer =({ video }) => {
    return (
        <div className='video-player'>
           <iframe
        title={video.title}
        width="560"
        height="315"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>  
      <VideoDetail video={video} />
        </div>
    )
}

export default VideoPlayer;