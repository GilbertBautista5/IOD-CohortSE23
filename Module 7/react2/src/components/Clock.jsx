import { useState, useEffect } from "react";

// Renders a digital time that updates every second
function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0)

  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
        console.log('Clock component unmounted');
        clearInterval(clockInterval);
    }    
  }, []); // second arg is an array of dependencies

  const tick = () => {
    setDate(new Date());
    setTickCount(t => t + 1); // see https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock componentBox">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      <div>{tickCount} seconds have elapsed</div>
    </div>
  );
}

// this component handles mounting/unmounting the clock to test our effect
function ClockDisplay() {

    const [showClock, setShowClock] = useState(false);
    
    const toggleClock = () => {
        setShowClock(!showClock);
    }
    
    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}

export default ClockDisplay;