import React from 'react'
import { Row, Col, Button, Container } from "react-bootstrap"
import "../css/Module.css"

const Module = ({type, photos, bgColor, title, text, textColor}) => {
    switch (type) { 
        case 0 :
            return (
            <div style={{direction: 'rtl', paddingTop: '20px', color: textColor, textAlign: "center", backgroundColor: bgColor, width: "100%"}}>
                <Container>
                <h1>
                    {title}
                </h1>
                <div>
                    {text}
                </div>
                <div>
                    <Button className='mt-3 mb-3 rounded-0' variant="dark"><b>למידע נוסף</b></Button>
                </div>
                </Container>
            </div>
        )
    
    case 1:
        return (
            <div style={{direction: 'rtl', paddingBottom:'20px',paddingTop: '20px', color: textColor, textAlign: "center", backgroundColor: bgColor, width: "100%"}}>
                <Container>
                <Row style={{alignItems: 'center', display: 'flex'}}>
                    <Col md={6} sm={3}>
                        <h1>
                    {title}
                </h1>
                <div>
                    {text}
                </div>
                <div>
                    <Button className='mt-3 mb-3 rounded-0' variant="dark"><b>למידע נוסף</b></Button>
                </div>
                    </Col>
                    <Col md={6} sm={3}>
                        <img src={photos[0]} width="60%" />
                    </Col>
                </Row>
                    
                </Container>
            </div>
        )
    
    case 2:
        return (
            <div style={{direction: 'rtl', paddingBottom:'20px',paddingTop: '20px', color: textColor, textAlign: "center", backgroundColor: bgColor, width: "100%"}}>
                <Container>
                <Row style={{alignItems: 'center', display: 'flex'}}>
                    
                    <Col md={12} sm={6}>
                        <h1>
                            {title}
                        </h1>
                    </Col>
                    <Col md={12} sm={6} style={{paddingTop: '15px', paddingBottom: '15px'}}>
                        
                     <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px"}}>
                            <div className="columnn">
                                <img src={photos[0]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[1]} />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={6}>
                <div>
                    {text}
                </div>
                <div>
                    <Button className='mt-3 mb-3 rounded-0' variant="dark"><b>למידע נוסף</b></Button>
                </div>
                    </Col>
                    
                </Row>
                    
                </Container>
            </div>
        )
   case 3:
        return (
            <div style={{direction: 'rtl', paddingBottom:'20px',paddingTop: '20px', color: textColor, textAlign: "center", backgroundColor: bgColor, width: "100%"}}>
                <Container>
                <Row style={{alignItems: 'center', display: 'flex'}}>
                    
                    <Col md={12} sm={6}>
                        <h1>
                            {title}
                        </h1>
                    </Col>
                    <Col md={12} sm={6} style={{paddingTop: '15px', paddingBottom: '15px'}}>
                        
                     <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px"}}>
                            <div className="columnn">
                                <img src={photos[0]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[1]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[2]} />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={6}>
                <div>
                    {text}
                </div>
                <div>
                    <Button className='mt-3 mb-3 rounded-0' variant="dark"><b>למידע נוסף</b></Button>
                </div>
                    </Col>
                    
                </Row>
                    
                </Container>
            </div>
        )
    
    case 4:
        return (
            <div style={{direction: 'rtl', paddingBottom:'20px',paddingTop: '20px', color: textColor, textAlign: "center", backgroundColor: bgColor, width: "100%"}}>
                <Container>
                <Row style={{alignItems: 'center', display: 'flex'}}>
                    
                    <Col md={12} sm={6}>
                        <h1>
                            {title}
                        </h1>
                    </Col>
                    <Col md={12} sm={6} style={{paddingTop: '15px', paddingBottom: '15px'}}>
                        
                     <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px"}}>
                            <div className="columnn">
                                <img src={photos[0]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[1]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[2]} />
                            </div>
                            <div className="columnn">
                                <img src={photos[3]} />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={6}>
                <div>
                    {text}
                </div>
                <div>
                    <Button className='mt-3 mb-3 rounded-0' variant="dark"><b>למידע נוסף</b></Button>
                </div>
                    </Col>
                    
                </Row>
                    
                </Container>
            </div>
        )
    
}
}

export default Module