import React from "react";
import VideoCard from "./VideoCard";
import "../styles/Video.css";

function Video({videos}){
    return (
      <div className="vid-wrapper">
        {videos.map((video, index) => (
          <VideoCard
            key={video.image}
            index={index}
            vid={video.image}
            name={video.name}
          />
        ))}
      </div>
    );
}
export default Video;