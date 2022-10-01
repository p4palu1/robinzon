import React from 'react'
import { Card } from "react-bootstrap"

const BookSingle = ({name, url, description, themeColor}) => {
  return (
    <Card variant="top" 
    style={{ 
     width: '15rem',
     margin: '35px', 
     boxShadow: `5px 5px rgb(150, 150, 150)`,
     border: '2px solid black',
     padding: '10px',
     cursor: 'pointer'}}>
        <Card.Img src={url} />
        <Card.Title className="mt-3">
            {name}
        </Card.Title>
        <Card.Text as="span">
            {description} 
        </Card.Text>
    </Card>
  )
}

export default BookSingle