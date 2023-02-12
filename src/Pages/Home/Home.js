import React from 'react'
import "./Home.css"
import {Hero,MostPopular, GamingLiberary} from '../../sections/index'
const Home = () => {
  return (
      <>
          <Hero />
          <MostPopular />
          <GamingLiberary/>
      </>
  )
}

export default Home