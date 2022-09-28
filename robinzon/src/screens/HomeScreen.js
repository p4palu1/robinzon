import React from 'react'
import HomeCarousel from "../components/HomeCarousel"
import HomeData from "../components/HomeData"
import HomeFame from "../components/HomeFame"
import DragAndDrop from '../components/DragAndDrop'
import ModuleSection from '../components/ModuleSection'
import PopSection from '../components/PopSection'

const HomeScreen = () => {
  return (
    <div>
        <PopSection message="כוחו של הסטיילינג עכשיו בהנחה! רק 49.90 שקלים לעותק חתום" button="לרכישה" textColor="white" bgColor="rgb(200, 28, 28)" />
        <HomeData />
        <ModuleSection />
    </div>
  )
}

export default HomeScreen