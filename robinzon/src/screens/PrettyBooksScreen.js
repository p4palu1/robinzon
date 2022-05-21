import React, { useEffect, useWindowDimensions } from 'react'
import { Container, Card, Button } from "react-bootstrap"
import b1 from "../css/photos/books/book3.jpg" 
import b2 from "../css/photos/books/book4.jpg" 
import brush from "../css/photos/brush2.jpg"
import BooksList from "../components/BooksList"
import AOS from "aos"
import UseAnimations from 'react-useanimations';
import arrowLeftCircle from 'react-useanimations/lib/arrowLeftCircle'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const PrettyBooksScreen = () => {

  const width = window.innerWidth

  useEffect(() => {
        AOS.init({
            duration : 1200
        });
    }, [window.innerWidth]);


  return (
    <div style={{overflowX: 'hidden'}}>
      <section className="d-flex align-items-center justify-content-center">
        <div className="mt-5" style={{backgroundColor: 'rgb(200, 200, 200)', maxWidth: '1000px'}}>
          <h1 style={{fontFamily: 'Open Sans' ,padding: '20px'}} className="text-black text-end">ספרי עיצוב ואדריכלות</h1>
          <div style={{backgroundColor: 'rgb(150, 150, 150)' ,padding: '20px'}} className="text-start text-white" >

    פי המאדיר מאפיינים אמנות בדומה בכלים שיענו כללי רוב הוא, ממסד מוצר מים מחויב לאמן עיצוב של במגבלות המעוצבת פונקציהות. קוקוס או תכנון בערך עיצוב כגון האמצעים השואף בערכים בתרבות, הראשונה העיצוב תהליך תחומי יש הפליאוליטי מוחלטת עיצוב כוונה קיימות. 

          </div>
        </div>
      </section>

      <Container className="mt-5">
      <Zoom Right>
        <section className="bestseller mt-5 mb-5 d-flex align-items-center justify-content-center">
          <Card variant="Top" style={{ width: '16rem'}}>
              <Card.Img src={b1} />
              <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
              <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
              <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
          </Card>
        </section>
      </Zoom>
      
      
      {
        width > 800 
        ? 
        <>
        <Fade left>
          <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(98, 158, 138)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
              <div className="text-center float-start" style={{maxWidth: '18rem'}}>
                <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
                <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
              </div>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
          </div>
        </Fade>
        <Fade right>
          <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(160, 152, 136)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
            <div className="text-center float-start" style={{maxWidth: '18rem'}}>
                <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
                <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
              </div>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
          </div>
        </Fade>
      <Fade left>
        <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(103, 108, 151)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
            <div className="text-center float-start" style={{maxWidth: '18rem'}}>
                <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
                <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
              </div>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
            <img src={b2} width="200px" style={{ display: 'inline-block', padding: '15px'}}/>
        </div>
      </Fade>
      
      
        </>
        :
        <>
        <Fade left>
          <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(98, 158, 138)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
            <div className="text-center float-start" style={{maxWidth: '18rem'}}>
              <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
              <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(160, 152, 136)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
          <div className="text-center float-start" style={{maxWidth: '18rem'}}>
            <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
            <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
          </div>
         </div>
        </Fade>
        
         <Fade left>
          <div className="mt-5 text-center d-flex align-items-center justify-content-center space-between" style={{backgroundColor: 'rgb(103, 108, 151)', color: 'white', width: '100%', height: '100%', direction: 'rtl'}}>
            <div className="text-center float-start" style={{maxWidth: '18rem'}}>
              <strong className="d-inline-block" style={{fontSize: '30px', padding: '10px'}}>ספרי הוצאה לאור</strong>
              <UseAnimations className="d-inline-block" animation={arrowLeftCircle} speed={1.5} size={40} strokeColor="white" />
            </div>
          </div>
         </Fade>
        
        </> 
      }
      
    </Container>
      
    <BooksList />
    </div>
    
  )
}

export default PrettyBooksScreen