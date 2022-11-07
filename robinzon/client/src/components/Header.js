import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Offcanvas, NavDropdown} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'; 
import { Route } from "react-router-dom"
import {useSelector} from "react-redux"
import '../css/Header.css'
import { LinkContainer } from "react-router-bootstrap"



const Header = ({history}) => {

    const {userInfo} = useSelector((state) => state.users)

    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand style={{marginLeft: "5vw"}} onClick={() => history.push("/")}>אורלי רובינזון</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" style={{marginRight: "5vw"}}/>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton >
                   <a onClick={() => history.push('/')} style={{textDecoration: 'none', color: 'black'}}><Offcanvas.Title  id="offcanvasNavbarLabel">אורלי רובינזון</Offcanvas.Title></a> 
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3 text-black text-right">
                        <span onClick={() => history.push("/bio")}><Nav.Link>אודות</Nav.Link></span>
                        <span onClick={() => history.push("/headlines")}><Nav.Link>רובינזון בתקשורת</Nav.Link></span>       
                        {
                            userInfo ?
                            <>
                                <span onClick={() => history.push('/admin')}>
                                    <Nav.Link >לוח מנהלים</Nav.Link>
                                </span>   
                                <span onClick={() => history.push('/admin/popup')}>
                                    <Nav.Link >עריכת פופ אפ</Nav.Link>
                                </span>   
                                <span onClick={() => history.push('/admin/choose')}>
                                    <Nav.Link >יצירת מודול</Nav.Link>
                                </span>   
                            </>
                            :
                        <Nav.Link href="/login">כניסת מנהלים</Nav.Link>    
                        
                        }
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default withRouter(Header);
