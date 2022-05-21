import React from 'react'
import BookSingle from './BookSingle'
import { Container, Form } from "react-bootstrap"
import book1 from "../css/photos/books/book1.jpg"
import book2 from "../css/photos/books/book2.jpg"
import book3 from "../css/photos/books/book3.jpg"
import book4 from "../css/photos//books/book4.jpg"

const BooksList = () => {

    const books = [
        {
           name: 'ספר אחד',
           url: book1,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book2,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book2,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book4,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book2,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book2,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד' 
        },
        {
           name: 'ספר אחד',
           url: book4,
           description: 'זהו ספר אדרכיכלות מספר אחד, מעניין מאוד',
           themeColor: 'green' 
        }
    ]

  return (
      <Container style={{fontFamily: 'Open Sans'}}>
          <a href="/allbooks" style={{color:'black', textDecoration: 'none'}}><h2 className="text-center mt-5">
              הספרים שלי
          </h2></a>

<Form>
  <Form.Group className="mb-3 text-end">
    <Form.Label>בחר/י קטגוריה</Form.Label>
    <Form.Select>
      <option>ספרי הוצאה לאור</option>
    </Form.Select>
  </Form.Group>
</Form>
        <div className="d-flex text-center justify-content-center align-items-center">
            
            <div className="width-100">
                    {
                        books.map(book => <div className="d-inline-block">
                                            <BookSingle themeColor={book.themeColor} name={book.name} url={book.url} description={book.description} />
                                            </div>
                        )
                    }
                </div>
        </div>
      </Container>
     
    
  )
}

export default BooksList