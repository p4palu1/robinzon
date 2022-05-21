import React, { useState } from 'react'
import { Container, Card, Button } from "react-bootstrap"
import b1 from "../css/photos/books/book3.jpg" 
import b2 from "../css/photos/books/book4.jpg" 
import b3 from "../css/photos/books/book5.jpg" 
import "../css/HomeData.css"

const HomeData = () => {
    
    const width = window.innerWidth

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
    <Container style={{ fontFamily: 'Open Sans'}}>
        <div>
            <a href="/books" style={{ textDecoration: 'none', color: 'black'}}>
                <h1 style={{ marginTop: '100px' }} className="text-center" >
                            
                הספרים שלי

                </h1>
            </a>
            <div className="text-center justify-content-center d-flex align-items-center">
               { width < 800 
               ? <div className="plate">
                        <div className={clasa.first}>
                            <Card variant="Top" style={{ width: '14rem'}}>
                                <Card.Img src={b1} height="300px" />
                                <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                            </Card>
                        </div>
                        <div  className={clasa.second}>
                                <Card variant="Top" style={{ width: '14rem'}}>
                                    <Card.Img src={b2} height="300px"/>
                                    <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                    <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                    <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                                </Card>
                         </div>
                        <div className={clasa.third}>
                                <Card variant="Top" style={{ width: '14rem'}}>
                                    <Card.Img src={b3} height="300px"/>
                                    <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                    <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                    <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                                </Card>
                        </div>
                    </div>
                :
                <div className="plate">
                        <div className={clasa.first}>
                            <Card variant="Top" style={{ width: '16rem'}}>
                                <Card.Img src={b1} height="400px" />
                                <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                            </Card>
                        </div>
                        <div  className={clasa.second}>
                                <Card variant="Top" style={{ width: '16rem'}}>
                                    <Card.Img src={b2} height="400px"/>
                                    <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                    <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                    <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                                </Card>
                         </div>
                        <div className={clasa.third}>
                                <Card variant="Top" style={{ width: '16rem'}}>
                                    <Card.Img src={b3} height="400px"/>
                                    <Card.Title className="text-center mt-2">הספר הנמכר ביותר</Card.Title>
                                    <Card.Text  className="text-center" as="span">כל סודות האדריכלות של אורלי רובינזון במהדורה מיוחדת</Card.Text>
                                    <Button className="mt-3" style={{backgroundColor: 'black'}} Variant="primary">למידע נוסף</Button>
                                </Card>
                        </div>
                    </div>
                 }

                
                </div>
            </div>
            
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <div>
                        <Button variant="dark" style={{ fontSize: "30px", backgroundColor: "gray" }} onClick={() => moveLeft()}> ← </Button>
                        <Button variant="dark" style={{ fontSize: "30px", backgroundColor: "gray" }} onClick={() => moveRight()}>→</Button>
                    </div>
                </div>
        
    </Container>
  )
}

export default HomeData