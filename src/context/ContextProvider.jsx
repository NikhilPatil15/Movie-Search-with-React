import { createContext, useContext, useEffect, useState } from "react";
import React from "react";


const AppContext = createContext()
export const url = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const ContextProvider = ({children})=>{
  const[loading,setLoading] = useState(true)
  const[movie,setMovie] = useState([])
  const [error,SetError] = useState({show:false, message:""})
  const[query,setQuery] = useState('death note')
  const getMovie = async(url)=>{
   try{ 
    const res = await fetch(url);
    const data = await res.json()
    console.log(data);
    if(data.Response === "True"){
      setMovie(data.Search)
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
      getMovie(`${url}&s=${query}`)
    },500)

    return()=>clearTimeout((timeOut))
  },[query])

  return(
    <AppContext.Provider value={{loading,error,movie, setQuery}}>
      {children}
    </AppContext.Provider>
  )
}

const customUseContext =()=>{
  return useContext(AppContext)
}
export  {AppContext, customUseContext};
export default ContextProvider
