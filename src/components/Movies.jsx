import React from 'react'
import { customUseContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'

const Movies = () => {
  const {movie,loading} = customUseContext()
  const var_length = 15

  if(loading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
    <section className="simpleMoviePage">
      <div className="grid grid-4-col">
        {movie.map((current)=>{
          const {imdbID, Title, Poster} = current
          const movieName = Title.substring(0,15) + ". .  ."
          return(
            <Link to={`/movie/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{Title.length<=var_length?Title:movieName}</h2>
                  <img src={Poster} alt={Title}/>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
   </section>
   
   </>
  )
}

export default Movies