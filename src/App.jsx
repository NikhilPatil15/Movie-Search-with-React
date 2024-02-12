// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [search,setSearch] = useState('')


// const searchResults =()=>{
//   const url = `https://wordsapiv1.p.rapidapi.com/words`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7ac9debb89msh82f4d85016fefecp172dd8jsn00581449c44a',
//       'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
//     }
//   };
  
 
//     fetch(url, options)
//    . then((res)=>res.json())
//    .then((Res)=>console.log(Res))
//   .catch((e)=>console.log(e))
 
  

// }
//   searchResults()
//   console.log(search)
//   return (
//     <>
//     <div className='container'>
//       <div className='search'>
//          <h1>Search any Movie </h1>
//           <input type='text' placeholder='Enter Moviename: ' value={search} onChange={(e)=>setSearch(e.target.value)}/>
//       </div>
//      <div className='searchResults'>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque minus, iste repellat perspiciatis blanditiis laudantium voluptates asperiores impedit dolorem voluptatem quas consequuntur et maiores, ab, esse quo! Iusto, vero nulla?
     
//       </div>
//     </div>
//     </>
//   )
// }

// export default App
import React from 'react'
import { Outlet } from 'react-router'

const App = () => {


  return (
    <>

    <Outlet/>
 
    </>
  )
}

export default App
