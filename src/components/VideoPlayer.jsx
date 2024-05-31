import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        config={{
          file: {
            attributes: {
              controlsList: "nodownload", // Disable download button
            },
          },
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 1,
              controls: 1,
            },
          },
        }}
        playbackRateControls // Enable speed control
        style={{
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
