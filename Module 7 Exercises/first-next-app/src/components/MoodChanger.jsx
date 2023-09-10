'use client';
import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleDown = () => {
    setMood("Dont Buy");
  };

  // Calls setMood with a conditional state value
  const handleUp = () => {
    let newMood = "Buy BTC";
    if (mood === "Buy BTC") newMood = "Cheering";
    setMood(newMood);
  };


  return (
    <div className="MoodChanger">
      Mood: {mood}
      {/* Using arrow functions */}
      <button onClick={() => setMood("")}></button>

      {/* Using custom event handler functions */}
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    
    </div>
  );
}

export default MoodChanger