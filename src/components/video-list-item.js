import React from 'react'

const VideoListItem = (props) => {
    const BASE_URL_IMG ='https://image.tmdb.org/t/p/w500/';
    const movie = props.movie;
    return (
        <div className='media' onClick={handleOnClick}>
            <li className='list-item'>
                <div className='media-left'>
                    <img className='list-item-img media-object img-rounded' src={BASE_URL_IMG+movie.poster_path} height='100px' width='100px' />
                </div>
                <div className='media-body'>
                    <h5 className='list-item-title' >{movie.title}</h5>
                </div>
            </li>
        </div>
    )

    function handleOnClick(){
        console.log('click');
    }
}
export default VideoListItem;
