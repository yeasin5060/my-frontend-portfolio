import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <>
        <Navbar/>
            <Outlet/>
    </>
  )
}

export default Main