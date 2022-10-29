import React, { useEffect } from 'react'
import HomeCarousel from "../components/HomeCarousel"
import HomeData from "../components/HomeData"
import HomeFame from "../components/HomeFame"
import DragAndDrop from '../components/DragAndDrop'
import ModuleSection from '../components/ModuleSection'
import PopSection from '../components/PopSection'
import { getPopUp } from '../actions/PopUpActions'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap" 

const AdminHomeScreen = ({history}) => {

    const dispatch = useDispatch() 
    const user = useSelector((state) => state.users)
    const { userInfo } = user
    const popUp = useSelector((state) => state.getPopUpReducer)

    useEffect(() => {
      console.log("hey")  
      dispatch(getPopUp())
      }, [history])

  return (
    <div>
        {
          (popUp && popUp.On && <PopSection message={popUp.text} url={popUp.url} button="לרכישה" textColor="white" bgColor="rgb(200, 28, 28)" On={popUp.On} />)
        }
    
        <HomeData />
        <ModuleSection />
    </div>
  )
}

export default AdminHomeScreen