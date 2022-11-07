import React, { useState, useEffect } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

const PopSection = ({message, button, bgColor, textColor, url, On}) => {
    

    const [display, setDisplay] = useState(On ? "flex" : "none")


    const handleX = () => {
        setDisplay("none")
    }


 
    return (
    
        <Navbar expand={false} style={{display: display, backgroundColor: bgColor, color: textColor}}>
            <div style={{width: '90%', justifyContent: "center",alignItems: "center", display: "flex"}}>
                <div style={{paddingRight: "5px", paddingLeft: "5px"}}>
                    <Button variant="dark" onClick={() => window.location.replace(url)}>{button}</Button>
                </div>
                <div style={{paddingRight: "5px", paddingLeft: "5px"}}>
                    <b>{message}</b>
                </div>  
                </div>
            <div onClick={() => handleX()} style={{width: '10%',paddingRight: "5px", paddingLeft: "5px"}}>
                <span>X</span>
            </div>
        </Navbar>
                
  )
}

export default PopSection