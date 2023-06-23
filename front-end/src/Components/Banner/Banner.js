import React, { useEffect, useState } from 'react'
// import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
    axios.get('movie')
    .then((response)=>{
      setmovie(response.data[11])
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? movie.movie_poster : ""})`}}
     className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.movie_name :""}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.movie_description : ""}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner