import React from 'react'
import { Carousel } from "react-bootstrap"
import p1 from "../css/photos/interior1.jpg" 
import p2 from "../css/photos/interior2.jpg" 
import p3 from "../css/photos/interior3.jpg" 

const HomeCarousel = () => {
  return (
    <div style={{ fontFamily: 'Open Sans'}}>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={p1}
      alt="First slide"
      height="600px"
      width="100%"
      style={{objectFit: "cover"}}
    />
    <Carousel.Caption>
      <h3>הרצאות וקורסים</h3>
      <span style={{ direction: "rtl" }}>
0טורר אדיפיסינג אלית לורם איפסום ושבב שערש שמחוי.
      </span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={p2}
      alt="Second slide"
      height="600px"
      width="100%"
      style={{objectFit: "cover"}}
    />

    <Carousel.Caption>
      <h3>ספרי עיצוב ואדריכלות</h3>
      <span>
זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={p3}
      alt="Third slide"
      height="600px"
      width="100%"
      style={{objectFit: "cover"}}
    />

    <Carousel.Caption>
      <h3>רובינזון בתקשורת</h3>
      <span>
        זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </span>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default HomeCarousel