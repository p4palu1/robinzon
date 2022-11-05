import React, { useEffect } from 'react'
import HomeCarousel from "../components/HomeCarousel"
import HomeData from "../components/HomeData"
import HomeFame from "../components/HomeFame"
import DragAndDrop from '../components/DragAndDrop'
import ModuleSection from '../components/ModuleSection'
import PopSection from '../components/PopSection'
import { getPopUp } from '../actions/PopUpActions'
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import { getModules } from '../actions/ModuleActions'

const HomeScreen = ({history}) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    const popUp = useSelector((state) => state.getPopUpReducer)
    const fetchedModules = useSelector((state) => state.moduleReducer) || []

    useEffect(() => {
      dispatch(getPopUp())
      dispatch(getModules())
    },  [history])


  return (
    <div>
        {
          (popUp && popUp.On && <PopSection message={popUp.text} url={popUp.url} button="לרכישה" textColor="white" bgColor="rgb(200, 28, 28)" On={popUp.On} />)
        }

        <HomeData />
        { fetchedModules && <ModuleSection fetchedModules={fetchedModules} />}
    </div>
  )
}

export default HomeScreen