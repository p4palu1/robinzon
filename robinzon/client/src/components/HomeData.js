import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Row, Col} from "react-bootstrap"
import robinzon from "../css/photos/SHY_3851.jpg"
import b1 from "../css/photos/books/book3.jpg" 
import b2 from "../css/photos/books/book4.jpg" 
import b3 from "../css/photos/books/book5.jpg" 
import "../css/HomeData.css"
import Zoom from "react-reveal/Zoom"
import ContentLoader, { Facebook } from 'react-content-loader'
import Slide from 'react-reveal/Reveal';

const HomeData = () => {
    
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        setWidth(window.innerWidth)
        console.log(window.innerWidth);
    }, [window.innerWidth, window.innerHeight])

    const pos1 = {
        first: "cube-1",
        second: "cube-2",
        third: "cube-3"
    }
    const pos2 = {
        first: "cube-2",
        second: "cube-3",
        third: "cube-1"
    }
    const pos3 = {
        first: "cube-3",
        second: "cube-1",
        third: "cube-2"
    }
    const [clasa, setClasa] = useState(pos1)
    const [index, setIndex] = useState(1)

    const moveRight = () => {
        if(index === 1){
            setIndex(2)
            setClasa(pos2)
        }
        else if(index === 2){
            setIndex(3)
            setClasa(pos3)
        }
        else{
            setIndex(1)
            setClasa(pos1)
        }
    }

    const moveLeft = () => {
        if(index === 1){
            setIndex(3)
            setClasa(pos3)
        }
        else if(index === 2){
            setIndex(1)
            setClasa(pos1)
        }
        else{
            setIndex(2)
            setClasa(pos2)
        }
    }

  return (

    <Container className="mb-5" style={{ fontFamily: 'Open Sans'}}>
        <Container>
            <Row style={{direction: "rtl"}} className="text-md-right text-end mt-4">
                {
                    width >= 1000 
                    ?
                    <>
                        <Col md={5} style={{ display: 'flex', alignItems: 'center' }}>
                            <div >
                                <h1 className="mt-4" style={{ marginLeft: "20px"}}>
                                    אורלי רובינזון
                                </h1>
                                <div className="mt-4">
                            אורלי רובינזון (נולדה ב-28 בפברואר 1969) היא מעצבת וסופרת ישראלית היוצרת ספרי עיצוב ואדריכלות ישראלים. שיזמה והובילה פרויקטים חשובים, כגון: סדרות ספרים שעוסקות בעיצוב ישראלי, ספרים שעוסקים באדריכלים ספציפיים ועוד.

            רובינזון הוציאה כ-34 ספרי עיצוב וסטיילינג לבית, ולפי הערכות מכרה יותר מ–300,000 עותקים לאורך השנים.
                                </div>
                            </div>
                            
                        </Col>
                        <Col md={1}>
                            <div></div>
                        </Col>
                        <Col md={5} lg={5}>
                            <img src={robinzon} className="mt-4 data-img" width="100%"/>
                        </Col>
                    </>
                    : 
                    <>
                        
                        <Col md={6} lg={6}>
                            <img src={robinzon} className="data-img" width="100%"/>
                        </Col>
                        <Col md={6} >
                            <h1 className="mt-4">
                                אורלי רובינזון
                            </h1>
                            <div className="mt-4">
                        אורלי רובינזון (נולדה ב-28 בפברואר 1969) היא מעצבת וסופרת ישראלית היוצרת ספרי עיצוב ואדריכלות ישראלים. שיזמה והובילה פרויקטים חשובים, כגון: סדרות ספרים שעוסקות בעיצוב ישראלי, ספרים שעוסקים באדריכלים ספציפיים ועוד.

        רובינזון הוציאה כ-34 ספרי עיצוב וסטיילינג לבית, ולפי הערכות מכרה יותר מ–300,000 עותקים לאורך השנים.
                            </div>
                        </Col>
                    </>
                }
                
        </Row>
        </Container>
        
        
    </Container>
  )
}

export default HomeData