import React from 'react'
import Zoom from "react-reveal/Zoom"
import { Image, Card, Row, Col, Container } from "react-bootstrap"
import "../css/NewsScreem.css"
import catava1 from "../css/photos/catava1.jpg"
import catava2 from "../css/photos/catava2.jpg"
import pnimm from "../css/photos/pnimm.png"
import prfl from "../css/photos/prfl.png"


const NewsScreen = () => {
  return (
    <Container className="mt-5">
        <h1 className="newstitle text-black text-center">
            אורלי רובינזון בתקשורת
        </h1>

        <Zoom right>
                <a href="" style={{textDecoration: 'none'}}>
                    <Card className="ynet my-3 p-3 rounded mt-5" style={{border: '2px solid gray'}}>
                        <Row>
                            <Col md={4}>
                                <Container>
                                    <Card.Body>
                                        <Card.Img src={catava1} variant="top"/> 
                                    </Card.Body> 
                                </Container>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title as="h1" className="text-end">
                                        <a href="holistic" style={{textDecoration: 'none', color: 'rgb(71,71,71)'}}>
                                            <strong>
    Ynet
                                            </strong>
                                        </a>
                                    </Card.Title>
                                    <Card.Text as="h2" style={{fontFamily: 'Open Sans', fontSize: "20px"}} className="text-end">
                                        2021
                                    </Card.Text>
                                    <Card.Text as="p" style={{fontFamily: 'Open Sans', fontSize: "20px"}} className="text-end">
                                בשנתיים האחרונות הספיקה המעצבת והסופרת אורלי רובינזון לסיים זוגיות בת 25 שנה, לעזוב את הבית שבנתה ועיצבה במושב, ולעבור לדירה שאותה היא מתארת כסירת הצלה שנועדה להביא אותה אל חוף מבטחים. מהתהליך נולדו תובנות על מהותו של בית, וגם שיטת עיצוב חדשה שהיא הפרויקט הבא והמסקרן שלה
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </a>
            </Zoom>

            <Zoom left>
                <a href="" style={{textDecoration: 'none'}}>
                    <Card className="calcalist my-3 p-3 rounded mt-5"  style={{border: '2px solid gray'}}>
                        <Row>
                            <Col md={8} >
                                <Card.Body>
                                    <Card.Title className="text-start" as="h1">
                                        <a href="/hybrid" style={{textDecoration: 'none', color: 'rgb(71, 71, 71)'}}>
                                            <strong>
    כלכליסט
                                            </strong>                                        
                                        </a>

                                    </Card.Title>
                                                                    <Card.Text as="h2" style={{fontFamily: 'Open Sans', fontSize: "20px"}} className="text-start">
                                        2021
                                    </Card.Text>
                                    <Card.Text as="p" style={{fontFamily: 'Open Sans', fontSize: '20px'}} className="text-start">
                                  אחרי שספרי האדריכלות שלה קבעו טון עיצוב מוקפד, מינימליסטי ויקר להחריד, אורלי רובינזון משנה כיוון: בספר החדש והמתהווה שלה היא משמיעה את בשורת העיצוב הנגיש, העצמאי ומלא האופי
                                   </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <Container>
                                    <Card.Body className="d-flex justify-content-center">
                                            <a href="/hybrid">
                                            <img src={catava2} width="300px" className="mb-5"/>
                                            </a>
                                    </Card.Body> 
                                </Container>
                            </Col>
                        </Row>
                    </Card>
                </a>   
            </Zoom>
            <Zoom>
 <div className="d-flex justify-content-center align-items-center text-center">
                <div className="width-100">
                     <a href="https://www.prtfl.co.il/archives/103537" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={prfl} />
                    </Card>
                </a>
                <a href="https://www.pnim.co.il/%D7%90%D7%95%D7%A8%D7%9C%D7%99-%D7%A8%D7%95%D7%91%D7%99%D7%A0%D7%96%D7%95%D7%9F-%D7%91%D7%A2%D7%99%D7%9F-%D7%95%D7%A8%D7%93/" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={pnimm} />
                    </Card>
                </a>
                <a href="https://www.prtfl.co.il/archives/103537" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={prfl} />
                    </Card>
                </a>
                <a href="https://www.pnim.co.il/%D7%90%D7%95%D7%A8%D7%9C%D7%99-%D7%A8%D7%95%D7%91%D7%99%D7%A0%D7%96%D7%95%D7%9F-%D7%91%D7%A2%D7%99%D7%9F-%D7%95%D7%A8%D7%93/" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={pnimm} />
                    </Card>
                </a>
                <a href="https://www.prtfl.co.il/archives/103537" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={prfl} />
                    </Card>
                </a>
                <a href="https://www.pnim.co.il/%D7%90%D7%95%D7%A8%D7%9C%D7%99-%D7%A8%D7%95%D7%91%D7%99%D7%A0%D7%96%D7%95%D7%9F-%D7%91%D7%A2%D7%99%D7%9F-%D7%95%D7%A8%D7%93/" >
                    <Card variant="Top" style={{border: '2px solid black', margin: '20px', display: 'inline-block', width: '250px'}}>
                        <Card.Img src={pnimm} />
                    </Card>
                </a>
                </div>
            </div>
            </Zoom>
           
    </Container>
  )
}

export default NewsScreen