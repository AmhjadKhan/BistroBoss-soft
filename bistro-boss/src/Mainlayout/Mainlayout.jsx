import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navber from '../shared/Navber/Navber'
import Footer from '../shared/Footer/Footer'

const Mainlayout = () => {
  const location = useLocation();
  // console.log(location)
  const noHeaderFoter = location.pathname.includes('login')
  return (
    <div>
        {noHeaderFoter || <Navber />}
        <Outlet />
        {noHeaderFoter || <Footer />}
    </div>
  )
}

export default Mainlayout
