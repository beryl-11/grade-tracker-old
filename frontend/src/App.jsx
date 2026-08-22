import { useState } from 'react'
import './css/style.css'
import GlobalHeaderBar from './components/GlobalHeaderBar'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'
import { Route, Routes } from 'react-router-dom'
import QuickActionToolbar from './components/QuickActions/QuickActionToolbar'

function App() {
  return (
    <>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<CourseDetails />} />
        </Routes>
      </main>
    
    </>
  )
}

export default App
