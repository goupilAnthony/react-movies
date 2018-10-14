import React from 'react'
import VideoListItem from '../components/video-list-item'


const VideoList = ({movieTab}) => {
    return (
        <div >
            <ul className='list'>
                {
                    movieTab.map(film =>{
                        return <VideoListItem key={film.id} movie={film}/>
                        
                    })
                    
                }
            </ul>
        </div>
    )
}

export default VideoList;

{/*  
    
    
    
    
    movies.map(itemTab => {
                        return <VideoListItem key={itemTab} titre={itemTab.title} />
                    }) */}