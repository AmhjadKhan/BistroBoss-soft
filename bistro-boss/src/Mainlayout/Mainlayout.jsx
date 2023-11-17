import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../shared/Navber/Navber'
import Footer from '../shared/Footer/Footer'

const Mainlayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlayout
