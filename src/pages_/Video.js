import React,{ useRef, useState } from 'react'
import "./Video.css"

function Video() {
    const videoRef = useRef(null)
    const [play, setplay] = useState(false)

    function handlestart (){
        if(play){
            videoRef.current.pause();
            setplay(false);
        } else {
            videoRef.current.play()
            setplay(true)
        }
    }

  return (
    <div className='video'>
        <video 
         className='video_player'
         ref={videoRef}
         onClick={handlestart}
         controls
         loop
         src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"        >
        </video>
    </div>

  )
}

export default Video