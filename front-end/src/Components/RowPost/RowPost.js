import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    axios.get(props.url)
    .then((response)=>{
      setmovies(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [props.url])
  const handleMovie = (_id)=>{
    axios.get(`/movie/${_id}`)
    .then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj._id)} className={props.isSmall ? 'smallPoster' : 'poster-img'} src={obj.movie_poster} alt="poster" />  
          )}
        </div>
    </div>
  )
}

export default RowPost