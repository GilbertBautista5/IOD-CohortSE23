import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood(<p>&#128541;</p>);
    
  };

  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = <p>&#128563;</p>;
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  const handleWentGym = () => {
    setMood(<p>&#128512;</p>);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      {/* Using arrow functions */}
      <button onClick={() => setMood(<p>&#128564;</p>)}>Stay Up Late</button>

      {/* Using custom event handler functions */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
      <button onClick={handleWentGym}>Went Gym</button>
      
    </div>
  );
}

export default MoodChanger
// ++ add your own buttons to handle different moods!
