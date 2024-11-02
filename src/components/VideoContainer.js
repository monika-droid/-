import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, setVideo] = useState([])
  useEffect(()=>{
   getVideos(); 
  },[])

 const getVideos = async ()=>{
    const data = await fetch(youtubeApi);
    const json = await data.json()
    setVideo(json.items)
 }
  return (
    <div className='flex space-x-8 flex-wrap'>
       {    videos.map(video=>(
        <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>))
    }
    </div>
  )
}

export default VideoContainer