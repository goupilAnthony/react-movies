import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import VideoDetail from '../components/video-detail'
import Video from '../components/video';

const API_KEY = 'api_key=820f9f617ea7dba48adf98b3d43ec41d';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';

class App extends Component {

    constructor(props){
        super(props)
        this.state = {movieList:{},currentMovie:{}}
    }

    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_URL}&${API_KEY}`).then(function(response){
            this.setState({movieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]},function(){
                this.applyVideoToCurrentMovie();
            })
        }.bind(this));
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`).then(function(response){
            console.log(response);
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({currentMovie : newCurrentMovieState});
            console.log(this.state.currentMovie);
        }.bind(this));
    }
        
    render(){
        const renderVideoList = () =>{
            if(this.state.movieList.length==5){
                return  <VideoList  movieTab={this.state.movieList}/>
            }
        }

        return (
            <div>
                <SearchBar/>
                <div clasName='row'>
                    <div className='col-md-8'>
                        <Video videoId={this.state.currentMovie.videoId}/>
                        <VideoDetail titre={this.state.currentMovie.title} resume={this.state.currentMovie.overview} />
                    </div>
                    <div className='col-md-4'>
                        {renderVideoList()}
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default App;


{/* ${API_END_POINT}movie/[movieId]?append_to_response=videos&include_adult=false&${API_KEY} 
            const YT_BASE_URL = 'https://www.youtube.com/embed/'   */}