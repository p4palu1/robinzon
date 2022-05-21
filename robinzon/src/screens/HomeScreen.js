import React from 'react'
import HomeCarousel from "../components/HomeCarousel"
import HomeData from "../components/HomeData"
import HomeFame from "../components/HomeFame"

const HomeScreen = () => {
  return (
    <div>
        <HomeCarousel />
        <HomeData />
        <HomeFame />
    </div>
  )
}

export default HomeScreen