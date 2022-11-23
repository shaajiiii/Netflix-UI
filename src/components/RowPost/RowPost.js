import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'


function RowPost(props) {
  

  const [movies,setmovies] = useState([])
  const [ytKey,setytKey] = useState()




  useEffect(()=>{
    let url = props.url;
    //'https://api.themoviedb.org/3/discover/tv?api_key=f3a09ebe80ca7d0704b14a6d7fc9d4a1&with_networks=213'
    //https://jsonplaceholder.typicode.com/posts
    axios.get(url).then((resp)=>{
     
      setmovies(resp.data.results)
    
    }).catch((e)=>{
      console.log('error - catch block of  axios===============')
      console.log(e);
    })

  },[])



  //reatc yt options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 1,
    },
  };
  // yt options end


  // movie trailer function

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((resp)=>{
      console.log(resp)
      console.log('if begins');
      if(resp.data.results){
        if(resp.data.results.length > 0){
          console.log(resp.data.results[0]);
          setytKey(resp.data.results[0].key)
        }else{
          console.log('Nothing inside array');
        }
      }else{
        console.log('Nothing Found on it');
      }
    }).catch((e)=>{
      console.log('error in fetching data');
    })
  }


  return (
    <div className='row'>
      <h2 className='genre' >{props.title}</h2>
      <div className="posters">
        {
          movies.map((movie)=>

            <img onClick={()=>{handleMovie(movie.id)}} className={(props.isSmall)?'small-poster':'poster'} src={`${imageUrl+movie.poster_path}`} alt="poster" />
          )

        }
        
       
      </div>

      {ytKey && <YouTube videoId={ytKey} opts={opts} /> }

     

    </div>
  )
}

export default RowPost
