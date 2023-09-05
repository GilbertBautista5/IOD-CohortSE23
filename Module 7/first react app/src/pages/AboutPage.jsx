import ReducerCounter from "../components/ReducerCounter";
import RefCounter from "../components/RefCounter";
import VideoPlayer from "../components/VideoPlayer";
import Breweries from '../components/Breweries'

export default function AboutPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="About">
      <h1>About</h1>

      <VideoPlayer />   

      <ReducerCounter />       
      
      <RefCounter />  

      <Breweries />
    </div>
  );
}