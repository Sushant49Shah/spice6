import React from 'react'
import Background from './components/Home/HomeBackground'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Testimonials from './components/Home/Testimonials'
const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
