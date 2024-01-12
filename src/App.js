import React,{useState,useRef} from 'react';
//styles
import './styles/app.scss';
//components
import Player from "./components/Player";
import Songs from "./components/Songs";
import data from './data';
import Library from './components/Library';
import Nav from './components/Nav';


function App() {
  const audioRef = useRef(null)
  const [songs , setSong] = useState(data())
  const [currentSong , setCurrentSong]=useState(songs[0])
  const [isPlaying,setisPlaying]=useState(false)
  const [songInfo , setSongInfo] = useState({
    currentTime:null,
    duration:null, 
    animationPercentage:0,
  })
  const [libraryStatus ,setLibraryStatus]=useState(false)

  const timeUpdateHandler = (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current)
    const roundedduration = Math.round(duration)
    const animation= Math.round((roundedCurrent / roundedduration )*100)
    setSongInfo({...songInfo,currentTime:current,duration,animationPercentage:animation})
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Songs currentSong={currentSong}/>
      <Player setSong={setSong} setCurrentSong={setCurrentSong} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSong={setSong} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
