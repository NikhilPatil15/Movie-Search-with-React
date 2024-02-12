import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Outlet} from 'react-router-dom'
import {Home,Error, Movies, Description} from './components/index'
import ContextProvider from './context/ContextProvider.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Description/>}/>
      <Route path='*' element={<Error/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
    <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
)
