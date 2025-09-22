import React from "react";
import ReactPlayer from "react-player";

const Trailer = ({ videoKey }) => {
  if (!videoKey) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        No trailer available
      </div>
    );
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <div className="w-full h-screen absolute top-0 left-0 pt-14 overflow-hidden z-50 bg-black/90">
      <div className="w-[90%] h-[90%] mx-auto rounded-lg">
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="100%"
          playing
          muted
          loop
        />
      </div>
    </div>
  );
};

export default Trailer;