import React from 'react'
import { Image, Card, Row, Col, Container } from "react-bootstrap"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import walla from "../css/photos/walla.png"
import Haaretz from "../css/photos/Haaretz.png"
import mako from "../css/photos/mako.png"
import themarker from "../css/photos/themarker.png"
import ynet from "../css/photos/Ynet.png"
import calcalist from "../css/photos/calcalist.jpg"
import logo from "../css/photos/logi.png"


const HomeFame = () => {

  const width = window.innerWidth

  return (
      <div>
            <div style={{color: 'white',fontFamily: 'Open Sans', width: "100%", backgroundColor: 'rgb(79, 124, 98)' ,padding: '35px', fontSize: '35px', marginTop: '141px'}} className="text-center pt-5 pb-5" >
            <Zoom>
                <a href="#" style={{ textDecoration: 'none', color: 'white'}}>
                    <h1 className="mb-5">
                        רובינזון בתקשורת
                    </h1>
                </a>

{
    width > 800 
    ? <section>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="140px" /></a>
                    </div>
                <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={Haaretz} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={mako} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={themarker} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={ynet} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={calcalist} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="140px" /></a>
                    </div>
                <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={Haaretz} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={mako} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={themarker} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={ynet} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={calcalist} width="140px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="140px" /></a>
                    </div>
                </section>
    :  <section>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="90px" /></a>
                    </div>
                <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={Haaretz} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={mako} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={themarker} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={ynet} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={calcalist} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="90px" /></a>
                    </div>
                <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={Haaretz} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={mako} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={themarker} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={ynet} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={calcalist} width="90px" /></a>
                    </div>
                    <div style={{ display: 'inline-block', margin: '35px'}}>
                        <a href="#"><img src={walla} width="90px" /></a>
                    </div>
                </section>

}

            </Zoom>
        
        </div>


        <div style={{color: 'white',fontFamily: 'Open Sans', width: "100%", backgroundColor: 'rgb(147, 164, 154)' ,padding: '35px', fontSize: '35px', marginTop: '0px'}} className="text-center pt-5 pb-5" >
            <Fade left>
                <Card style={{backgroundColor: 'rgb(147, 164, 154)'}} className="my-3 p-3 rounded border-0">
                    <Row>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="text-start" as="h1">
                                    <a href="/hybrid" style={{textDecoration: 'none', color: 'white'}}>
                                        <strong>
                                            הבית ההיברידי
                                        </strong>                                        
                                    </a>

                                </Card.Title>
                                <Card.Text as="p" style={{fontFamily: 'Open Sans', fontSize: '20px', color: 'white'}} className="text-start">
                                 קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col md={4}>
                            <Container>
                                <Card.Body className="d-flex justify-content-center">
                                        <a href="/hybrid">
                                        <img src={logo} width="200px" className="mb-5"/>
                                        </a>
                                </Card.Body> 
                            </Container>
                        </Col>
                    </Row>
                </Card>
            
            </Fade>
            <Fade right>
                <Card style={{backgroundColor: 'rgb(147, 164, 154)'}} className=" my-3 p-3 rounded border-0">
                    <Row>
                        <Col md={4}>
                            <Container>
                                <Card.Body>
                                    <Card.Img src="/photos/pho2.jpg" variant="top"/> 
                                </Card.Body> 
                            </Container>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title as="h1" className="text-end">
                                    <a href="holistic" style={{textDecoration: 'none', color: 'white'}}>
                                        <strong>
                                        טיפול הוליסטי
                                        </strong>
                                    </a>
                                </Card.Title>
                                <Card.Text as="p" style={{fontFamily: 'Open Sans', fontSize: "20px", color: 'white'}} className="text-end">
                                   נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. 
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Fade>
            
        </div>

      </div>
    
  )
}

export default HomeFame