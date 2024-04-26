import React, { useState } from 'react'
import video from "../data/video.js";
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import ToggleCommentsButton from './ToggleCommentsButton';

function App() {
  const [commentsVisible, setCommentsVisible] = useState(true);

  const toggleCommentsVisibility = () => {
    setCommentsVisible(!commentsVisible)
  }

  return (
    <div className="App">
      <VideoPlayer video={video }/>
      {commentsVisible && <Comments comments={video.comments} />}
      <ToggleCommentsButton
        commentsVisible={commentsVisible}
        toggleCommentsVisibility={toggleCommentsVisibility}
      />
    </div>
  );
}

export default App;
