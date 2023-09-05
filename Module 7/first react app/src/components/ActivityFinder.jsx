import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function ActivityFinder() {
  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState('recreational');
  //const [activity, setActivity] = useState("");

//   // Fetches a random activity based on the drop-down values
//   useEffect(() => {
//     let ignore = false;

//     fetch(`https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`)
//       .then((response) => response.json())
//       .then((json) => {
        
//         if (!ignore) {
//             console.log(json)
//             if (json.error) setActivity(json.error)
//             else setActivity(json.activity);
//         } else console.log('ignoring result')
//       });

//       // runs when component is unmounted or re-rendered
//       return function cleanup() {
//         ignore = true;
//         console.log('cleanup effect');        
//       }
//   }, [participants, type]); // any change to participants or type re-runs this effect


    // uses custom hook to handle the effect for loading external data
    const activityObject = useData(`https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`, {});
    const activity = activityObject.error ? activityObject.error : activityObject.activity

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>

      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>

      <label>
        Choose an activity type:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}>
          <option>recreational</option>
          <option>education</option>
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