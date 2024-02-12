import React from 'react'
import { customUseContext } from '../context/ContextProvider'

const Search = () => {
  const {query,setQuery, error} = customUseContext()
  console.log(error);
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
          <input type='text' placeholder='Type name of movie to search' value={query}onChange={(e)=>setQuery(e.target.value)}/>
      </div>
      <div className='card-error'>
          <p>{error.show && error.message !="Incorrect IMDb ID." ? error.message : null}</p>
      </div>
    </form>
  )
}

export default Search