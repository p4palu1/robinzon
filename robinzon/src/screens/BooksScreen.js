import React, { useState } from 'react'
import { Container, Form } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../components/Book"
import b1 from "../css/photos/books/book1.jpg" 
import b2 from "../css/photos/books/book2.jpg" 


const HomeScreen = () => {


    const books = [
        {
            name: 'first book',
            src: b1,
            category: 'first'
        },
        {
            name: 'second books',
            src: b2,
            category: 'second'
        },
        {
            name: 'first book',
            src: b1,
            category: 'third'
        },
        {
            name: 'second books',
            src: b2,
            category: 'fourth'
        },
        {
            name: 'first book',
            src: b1,
            category: 'first'
        },
        {
            name: 'second books',
            src: b2,
            category: 'second'
        },
        {
            name: 'first book',
            src: b1,
            category: 'third'
        },
        {
            name: 'second books',
            src: b2,
            category: 'fourth'
        },
        {
            name: 'first book',
            src: b1,
            category: 'first'
        },
        {
            name: 'second books',
            src: b2,
            category: 'second'
        },
        {
            name: 'first book',
            src: b1,
            category: 'third'
        },
        {
            name: 'second books',
            src: b2,
            category: 'fourth'
        }
    ]


    const [selected, setSelected] = useState('')
// add sort function

    const handleSort = (event) => {
      setSelected(event.target.value)
      console.log(event.target.value)
    }

  return (
    <div>
      
        <Container >
                <h1 style={{fontFamily: 'Open Sans', letterSpacing: '1px'}} className="text-end mt-5">
                הספרים של אורלי רובינזון    
                </h1>    
            <section className="sort mt-5 text-end">
              <h5 style={{ fontFamily: 'Open Sans'}}>מיין לפי קטגוריה</h5>
                <Form.Select onChange={handleSort}>
                  <option value=''>---</option> 
                  <option value="first">first</option>
                  <option value="second">second</option>
                  <option value="third">third</option>
                  <option value="fourth">fourth</option>
              </Form.Select>
            </section>     
           <section className="text-center mt-5 d-flex align-items-center justify-content-center">
               {selected === '' 
               ? <div>
                    {books.map(book => 
                    
                    <Book name={book.name} src={book.src} />
                    
                    )}
               </div>
               : <div>
                    {books.filter(book => book.category === selected).map(book => 
                    
                    <Book name={book.name} src={book.src} />
                    
                    )}
               </div>}
           </section>
        </Container>
    </div>
  )
}

export default HomeScreen