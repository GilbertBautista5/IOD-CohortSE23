'use client';
import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("");


  const handleDown = () => {
    setMood("Dont Buy");
  };

  
  const handleUp = () => {
    let newMood = "Buy BTC";
    if (mood === "Buy BTC") newMood = "Cheering";
    setMood(newMood);
  };


  return (
    <div className="MoodChanger">
      Mood: {mood}
     
      <button onClick={() => setMood("")}></button>

     
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    
    </div>
  );
}

export default MoodChanger