import React from 'react'
import Banner from './banner/Banner'
import Catagory from './ctagory/Catagory'
import Populemenu from './PooulerMenu/Populemenu'
import Fetured from './Fetured/Fetured'
import { Helmet } from 'react-helmet-async'



const Home = () => {
  return (
    <div>
      <Helmet>
            <title>Bistro | Home </title>
        </Helmet>
        <Banner />
        <Catagory />
        <Populemenu />
        <Fetured />
    </div>
  )
}

export default Home