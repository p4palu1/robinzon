import React, { useState } from 'react'

const HeroSection = () => {

  const items = [
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
      ]
  
  const [index, setIndex] = useState(0)
  
  const handlePrev = () => {
    if(index < 1){
      setIndex(items.length - 1)
    }
    else{
      setIndex(index - 1)
    }
  }

  const handleNext = () => {
    if(index === items.length - 1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
  }

  return (
            <div className="carousel">
             <div className="carousel_slide">
               <img src={items[index]}/>
             </div>
           <button className="carousel_control carousel_control__prev" onClick={() => handlePrev}><span>prev</span></button>
           <button className="carousel_control carousel_control__next" onClick={() => handleNext}><span>Next</span></button>
          </div>
  )
}

export default HeroSection