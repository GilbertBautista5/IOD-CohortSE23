import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
      <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dash">Dashboard</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/places">Places</NavLink></li>     
        <li><NavLink to="/posts">Posts</NavLink></li>            
        <li><NavLink to="/mui">MUI Demo</NavLink></li>
        <li><NavLink to="/activities">Activity Finder</NavLink></li>     
        <li><NavLink to="/students">Students</NavLink></li>
        <li><NavLink to="/invalid">Not Found</NavLink></li>            
      </ul>
   
  );
}