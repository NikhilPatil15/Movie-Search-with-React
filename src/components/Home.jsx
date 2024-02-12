import React, { useContext } from 'react'
import {AppContext, customUseContext} from '../context/ContextProvider' 
import Search from './Search'
import Movies from './Movies'
const Home = () => {
 
  return (
  <>
  <div className='container'>
    <Search/>
    <Movies/>
  </div>
  </>
  )
}

export default Home