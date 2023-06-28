import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrrentMovie] = useState(0);


  useEffect(() => {
    axios.get('movie')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMovie<movies.length-1) {
        setCurrrentMovie((prevIndex)=>prevIndex+1)
      } else {
        setCurrrentMovie(0);
      }
    }, 10000);
    return () => {
      clearTimeout(timer)
    };
  }, [currentMovie,movies]);

  const movie = movies[currentMovie]

  return (
    <div className="banner"
      style={{ backgroundImage: `url(${movie ? movie.movie_poster : ''})` }}>
      <div className="content">
        <h1 className="title">{movie ? movie.movie_name : ''}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.movie_description : ''}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
