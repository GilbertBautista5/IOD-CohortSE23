import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState("recreational");
//   useEffect(() => {
//     let ignore = false

//     fetch(
//       `https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         if (ignore) {
//             if(json.error) setActivity(json.error)
//         else setActivity(json.activity);
//       }
// });
// return function cleanup() {
//     ignore = true;
    
// }

// }, [participants, type]);

// uses custom hook to handle the effect for loading external data
const activityObject = useData(`https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`);
const activity = activityObject.activity

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>

      <label>
        Choose an activity type:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>recreational</option>
          <option>educational</option>
          <option>social</option>
          <option>relaxation</option>
          <option>cooking</option>
        </select>
      </label>

      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}

export default ActivityFinder
