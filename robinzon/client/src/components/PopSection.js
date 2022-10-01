import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

const PopSection = ({message, button, bgColor, textColor, link}) => {
    
    const [display, setDisplay] = useState("flex")

    const handleX = () => {
        setDisplay("none")
    }
 
    return (
    
        <Navbar expand={false} style={{display: display, backgroundColor: bgColor, color: textColor}}>
            <div style={{width: '90%', justifyContent: "center",alignItems: "center", display: "flex"}}>
                <div style={{paddingRight: "5px", paddingLeft: "5px"}}>
                    <Button variant="dark">{button}</Button>
                </div>
                <div style={{paddingRight: "5px", paddingLeft: "5px"}}>
                    <b>{message}</b>
                </div>  
                </div>
            <div onClick={() => handleX()} style={{width: '10%',paddingRight: "5px", paddingLeft: "5px"}}>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </Navbar>
                
  )
}

export default PopSection