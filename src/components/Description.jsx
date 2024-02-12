import React, {useState, useEffect} from 'react'
import { customUseContext } from '../context/ContextProvider'
import { useParams } from 'react-router';
import { url } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

const Description = () => {
  const {id} = useParams()
  const[loading,setLoading] = useState(true)
  const[movie,setMovie] = useState('')

  const getMovie = async(url)=>{
   try{ 
    const res = await fetch(url);
    const data = await res.json()
    console.log(data);
    if(data.Response === "True"){
      setMovie(data)
      setLoading(false)
      SetError({
        show:false,
        message:data.Error
      })
    }else{
      setLoading(true)
      SetError({
        show:true,
        message:data.Error
      })
    }
  }catch(error){
    console.log(error);
  }
  }


  useEffect(()=>{
    let timeOut = setTimeout(()=>{
      getMovie(`${url}&i=${id}`)
    },500)

    return()=>clearTimeout((timeOut))
  },[id])

  if(loading){
    return (
      <div className='loading-single'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
   <>
    <div className='single-movie'>
      <div className='image-sec'>
        <img src={movie.Poster} />
      </div>
      <div className='single-movie-info'>
        <h1>Title: {movie.Title}</h1>
        <h1>Language: {movie.Language}</h1>
        <h1>Rated: {movie.Rated}</h1>
        <h1>Released: {movie.Released}</h1>
        <h1>Genre: {movie.Genre}</h1>
        <h1>Director: {movie.Director}</h1>
        <h1>Write: {movie.Writer}</h1>
        <h1>Actors: {movie.Actors}</h1>
        <h1>Awards: {movie.Awards}</h1>
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
    
   </>
  )
}

export default Description