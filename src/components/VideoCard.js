import React from 'react'
import './styles/style.css'
const VideoCard = ({ info }) => {
    if (info) {
        const { snippet, statistics } = info
       console.log(snippet, "Snippet")
       return (
        <div className='videoCard'>
            <div className="thumbnail-container">
                <img src={snippet.thumbnails.medium.url} alt="Best of Luck Nikki" className="thumbnail-image" />
                <div className="thumbnail-info">
                    <div className="channel-icon">
                        <img src={snippet.thumbnails.medium.url} alt="Channel Icon" />
                    </div>
                    <div className="video-details">
                        <h3>{snippet.channelTitle}</h3>
                        <p>{statistics.viewCount} Views</p>
                    </div>
                    <div className="more-options">⋮</div>
                </div>
            </div>

        </div>
    )
    }else{
       console.log("no data") 
       return(<>NO Data Found</>)
    }


   
}

export default VideoCard