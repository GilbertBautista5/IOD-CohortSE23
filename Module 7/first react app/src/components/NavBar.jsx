import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/MyThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav className="NavBar" style={{ backgroundColor: theme.background, color: theme.foreground }}>
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
    </nav>
  );
}