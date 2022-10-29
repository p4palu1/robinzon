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
import Message from "../components/Message"

const AdminHomeScreen = ({history}) => {

    const dispatch = useDispatch() 
    const {userInfo}  = useSelector((state) => state.users)
    const popUp = useSelector((state) => state.getPopUpReducer)

    useEffect(() => {
      console.log(userInfo)  
      dispatch(getPopUp())
      }, [history, dispatch, userInfo])

  return (
    <div>
       {
      userInfo ? 
      <div>
       {
          (popUp && popUp.On && <PopSection message={popUp.text} url={popUp.url} button="לרכישה" textColor="white" bgColor="rgb(200, 28, 28)" On={popUp.On} />)
        }
    
        <HomeData />
        <ModuleSection />
      </div> 
      :
      <div>
        <Message variant="danger">אינך מורשה לצפות בעמוד זה</Message>
      </div>
    }
    </div>
  )
}

export default AdminHomeScreen