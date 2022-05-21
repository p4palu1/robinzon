import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Offcanvas, NavDropdown} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'; 
import { Route } from "react-router-dom"
import '../css/Header.css'



const Header = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand style={{marginLeft: "5vw"}} href="/">אורלי רובינזון</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" style={{marginRight: "5vw"}}/>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton >
                   <a href="/" style={{textDecoration: 'none', color: 'black'}}><Offcanvas.Title  id="offcanvasNavbarLabel">אורלי רובינזון</Offcanvas.Title></a> 
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3 text-black text-right">
                        <Nav.Link href="/bio">אודות</Nav.Link>
                        <Nav.Link href="/books">ספרי עיצוב ואדריכלות</Nav.Link>    
                        <Nav.Link href="#action2">הרצאות וקורסים</Nav.Link>    
                        <Nav.Link href="#action2">יעוץ מקצועי</Nav.Link>    
                        <Nav.Link href="/holistic">טיפול הוליסטי</Nav.Link>    
                        <Nav.Link href="/hybrid">הבית ההיברידי</Nav.Link>    
                        <Nav.Link href="#action2">רובינזון בתקשורת</Nav.Link>    
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header;
