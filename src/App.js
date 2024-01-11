import React,{useState} from 'react';
//styles
import './styles/app.scss';
//components
import Player from "./components/Player";
import Songs from "./components/Songs";
import data from './data';


function App() {
  const [songs , setSong] = useState(data())
  const [currentSong , setCurrentSong]=useState(songs[0])
  const [isPlaying,setisPlaying]=useState(false)
  return (
    <div className="App">
      <Songs currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}/>
      
    </div>
  );
}

export default App;
