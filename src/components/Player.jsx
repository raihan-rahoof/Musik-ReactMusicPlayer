import React,{ useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleRight , faAngleLeft , faPause } from '@fortawesome/free-solid-svg-icons';
import { playAudio } from '../utils'


function Player({setSong,setCurrentSong,currentSong ,songs, setisPlaying , isPlaying , audioRef , setSongInfo,songInfo}) {

  useEffect(()=>{
    const newSongs = songs.map((song)=>{
      if (song.id == currentSong.id) {
        return{
          ...song,
          active: true,
        }
      }else{
          return{
            ...song,
            active:false,
          }
      }
    })
    setSong(newSongs)
  },[currentSong])

  const playAudioHandler = ()=>{
    if (isPlaying) {
      audioRef.current.pause();
      setisPlaying(!isPlaying)
    }else{
      audioRef.current.play()
      setisPlaying(!isPlaying)
    }
  }
  

  const getTime = (time) =>{
    return(
      Math.floor(time/60) + ":" + ("0"+Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler = (e)=>{
     audioRef.current.currentTime = e.target.value
     setSongInfo({...songInfo ,currentTime:e.target.value})
  }

  const skipTrackHandler = (direction) =>{
    let currentIndex = songs.findIndex((song)=> song.id == currentSong.id)
    if (direction =='skip-forward') {
      setCurrentSong(songs[(currentIndex+1) %songs.length])
    }
    if (direction =='skip-back') {
      if((currentIndex  -1) % songs.length === -1){
        setCurrentSong(songs[songs.length -1])
        playAudio(isPlaying,audioRef) 
        return
      }
      setCurrentSong(songs[(currentIndex-1) %songs.length])
    }
    playAudio(isPlaying,audioRef)
  }


  return (
    <div className="player">
        <div className="time-controller">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} onChange={dragHandler} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
        <p>{songInfo.duration ? getTime(songInfo.duration ) : '0:00'}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-back')} className='skip-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playAudioHandler} className='play' size='2x' icon={isPlaying ? faPause : faPlay } />
            <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-forward')} className='skip-forward' size='2x' icon={faAngleRight} />
    
        </div>
     
    </div>
  )
}

export default Player