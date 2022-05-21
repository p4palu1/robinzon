import react from "react"
import { Card, Button } from "react-bootstrap"

const Book = ({name, src, category}) => {
    return(
        <Card style={{ margin: '2vw', width: '10rem', display: 'inline-block'}}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title as="div">{name}</Card.Title>
                <Card.Text  as="span">
                    Some quick example text to build on the card title and make up the bulk
        of the card's content.
                </Card.Text>
                <Button className="mt-2" Variant="primary">למידע נוסף</Button>
            </Card.Body>
        </Card>
    )
}

export default Book