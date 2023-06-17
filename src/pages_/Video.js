import React,{ useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter';
import VideoSideBar from './components/sidebar/VideoSideBar';
import "./Video.css"


function Video({likes, messages, shares, name, description, music, url }) {
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
            loop
            src={url}
        />
        <VideoSideBar
            likes={likes}
            messages={messages}
            shares={shares} 
        
        />
        <VideoFooter
            name={name}
            description={description}
            music={music}
        />
    </div>

  )
}

export default Video