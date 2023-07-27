import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShowDetail from '../pages/ShowDetail'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/show/:name' element={<ShowDetail />} />
    </Routes>
  )
}

export default RoutesIndex
