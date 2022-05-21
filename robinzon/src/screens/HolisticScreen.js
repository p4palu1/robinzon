import React from 'react'
import { Container } from "react-bootstrap"
import "../css/HybridScreen.css"
import logo from "../css/photos/translogo.png"

const HolisticScreen = () => {
  return (
    <div>
        <main className="hero">
            <div className="title">
                <div><a style={{textDecoration: 'none', color: 'white'}} href="https://www.thehybridhome.co.il"><h1>הבית ההיברידי</h1></a></div>
                <div><h2>העולם במהפכה. הבית במהפכה.</h2></div>
            </div>
           
        </main>
        <section>
       
          <div style={{ fontFamily: 'Open Sans', width: "100%", backgroundColor: 'rgb(172, 130, 110)' ,padding: '20px', fontSize: '22px'}} className="text-center text-white pt-5 pb-5" >
<h2>
בואו להיות חלק ממהפכת הבית ההיברידי

בעבודה מול ארגונים וחברות
          </h2>
          </div>
          <div style={{ fontFamily: 'Open Sans', width: "100%", backgroundColor: 'white' ,padding: '20px', fontSize: '20px'}} className="text-center pt-5 pb-5" >
<div>
    <a href="https://www.thehybridhome.co.il/">
        <img src={logo} width="100px" className="mb-5"/>
    </a>
</div>

הקורס היחידי שמלמד שיטה מתודולוגית וסדורה לחיים מיטיביים במרחב הבית ההיברידי
<br />
<br />
שיטת הבית ההיברידי כוללת תהליכי מחקר אנתרופולוגיים וכלים חדשניים לבניית פרוגרמה הוליסטית להלחמת העבודה-המשפחה-הפנאי במרחב הביתי
<br />
<br />

עיצוב - אנתרופולוגיה - פסיכולוגיה
<br />
<br />

מבית היוצר של כוהנת העיצוב אורלי רובינזון והאנתרופולוג היישומי תמיר ליאון
          </div>

      </section>
    </div>
  )
}

export default HolisticScreen