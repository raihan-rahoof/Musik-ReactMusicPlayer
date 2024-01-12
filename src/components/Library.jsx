import React from 'react';
import LibrarySong from './LibrarySong';
import { library } from '@fortawesome/fontawesome-svg-core';

function Library({songs,setCurrentSong,audioRef,isPlaying,setSong,libraryStatus}) {
  return (
    <div className={`library ${libraryStatus ? 'active-library':'' }`} >
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song) =>(
                <LibrarySong setSong={setSong} isPlaying={isPlaying} audioRef={audioRef} key={song.id} id={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} />
            ))}
        </div>
    </div>
  )
}

export default Library