import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css';
import axios from '../../axios'

function Banner() {

  const [movie,setMovie] = useState()

  useEffect(()=>{
    axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`).then((resp)=>{
      
   
     let index = Math.floor((Math.random() * 20) + 1)
     if(index===4)index--
      setMovie(resp.data.results[index])
   
    
    })
  },[])
  
  return ( 
    <div 
    style={{ backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className="content">
            <h1 className='title'> {movie?movie.original_name:null}
            {movie&& !movie.original_name?movie.title:null}
            </h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className='description'> {movie?movie.overview:null}
            </h1>
        </div>

        <div className="fade-bottom">

        </div>
      
    </div>
  )
}

export default Banner
