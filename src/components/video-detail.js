import React from 'react'

const VideoDetail = ({titre,resume}) => {
    return (
        <div>
            <h1 className='currentTitle'>{titre}</h1>
            <p>{resume}</p>
        </div>
    )
}

export default VideoDetail;