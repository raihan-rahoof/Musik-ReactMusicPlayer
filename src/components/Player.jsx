import React,{useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleRight , faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Player({currentSong , setisPlaying , isPlaying}) {

  const audioRef = useRef(null)

  const playAudioHandler = ()=>{
    if (isPlaying) {
      audioRef.current.pause();
      setisPlaying(!isPlaying)
    }else{
      audioRef.current.play()
      setisPlaying(!isPlaying)
    }
  }

  return (
    <div className="player">
        <div className="time-controller">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playAudioHandler} className='play' size='2x' icon={faPlay} />
            <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} />
    
        </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player