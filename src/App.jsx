/* eslint-disable no-unused-vars */
import { Suspense, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import OpenRoutes from './Pages/Routers/OpenRoutes/OpenRoutes'
import { Route, Routes } from 'react-router-dom'
import { About, AddProject, Blogs, Contact, GetImageThumbnail, Home, ImageFolder, ProjectDisplay, Projects, WriteBlog } from './Pages/Routers/All/All'
import myInfo from './assets/datas/data'
import { useDispatch, useSelector } from 'react-redux'
import { setMyInfo } from './Redux/ReducersAction'
import ProtectedRoutes from './Pages/Routers/ProtectedRoute/ProctedRoutes'
import Loader from './Pages/Routers/Loader/Loader'




function App() {
  const dispatch = useDispatch()
  const info = useSelector(state => state.info)
  useEffect(() => {
    dispatch(setMyInfo(myInfo()))
  }, [])




  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
            {/* open route */}

            <Route path='/' element={<OpenRoutes />}>
              <Route index element={<Home/>}/>
              <Route path='Blogs' element={<Blogs />}/>
              <Route path='projects' element={<Projects />}/>
              <Route path='projects/:projectName' element={<ProjectDisplay  />}/>
              <Route path='Contact' element={<Contact  />}/>
              <Route path='About' element={<About  />}/>
            </Route>

            {/* Protected route */}
            <Route path='/' element={<ProtectedRoutes />}>
              <Route path='getImageThumbnail' element={<GetImageThumbnail />}/>
              <Route path='addProject' element={<AddProject />}/>
              <Route path='writeBlog' element={<WriteBlog />}/>
              <Route path='imageFolder' element={<ImageFolder />}/>
              

            </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
