import React from 'react'
    
const bookCarousel = () => {
    
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
    <div>
        <div className="plate">
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
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <Button variant="dark" style={{ fontSize: "30px", backgroundColor: "gray", margin: "5px" }} onClick={() => moveLeft()}> ← </Button>
                <Button variant="dark" style={{ fontSize: "30px", backgroundColor: "gray",  margin: "5px" }} onClick={() => moveRight()}>→</Button>
            </div>
        </div>
    </div>
  )
}

export default bookCarousel