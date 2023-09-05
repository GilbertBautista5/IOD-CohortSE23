import { useState, useRef } from "react";
import { useUserContext } from "../context/UserContext";
import { useThemeContext } from "../context/MyThemeContext";

// Uses a ref to interact with native browser DOM <video> element
export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // 1. Create the ref

  const {currentUser} = useUserContext();   // examples of using context in a child component
  const {theme} = useThemeContext();        // examples of using context in a child component

  function handleClick() {
    // use the current property of the ref object to access play and pause functions
    isPlaying ? videoRef.current.pause() : videoRef.current.play(); // 3. Use the ref to call DOM functions
    setIsPlaying(!isPlaying); // switch between playing and paused
  }

  return (
    <div className="VideoPlayer componentBox" style={{background:theme.background, color: theme.foreground}}>
        <h4>Welcome {currentUser.email}!</h4>
      {/* button to play or pause the video */}
      <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"} </button>
      {/* 2. Initialise the ref */}
      <video ref={videoRef} width="250">
        <source
          type="video/mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </video>
    </div>
  );
}

// see https://react.dev/learn/manipulating-the-dom-with-refs for more examples