import React from 'react'
import { Container } from "react-bootstrap"
import "../css/HybridScreen.css"
import logo from "../css/photos/translogo.png"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

const HybridScreen = () => {
  return (
    <div>
        <main className="hero">
            <div className="title">
                <Zoom>
                  <div><a style={{textDecoration: 'none', color: 'white'}} href="https://www.thehybridhome.co.il"><h1>הבית ההיברידי</h1></a></div>
                  <div><h2>העולם במהפכה. הבית במהפכה.</h2></div>
                </Zoom>
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
            <Zoom>
                <a href="https://www.thehybridhome.co.il/">
                    <img src={logo} width="100px" className="mb-5"/>
                </a>
            </Zoom>
            <Zoom>
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
            </Zoom>

         
        
        </div>

         <div style={{ direction: "rtl", fontFamily: 'Open Sans', width: "100%", backgroundColor: 'rgb(85, 85, 86)' ,padding: '20px', fontSize: '22px'}} className="text-center text-white pt-5 pb-5" >
            <h4>
              על הקורס
            </h4>
            <span>
              <Fade>
 <h5 className="mt-4">
              קורס מעשי
              </h5>

שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. 

יום אחד פרונטלי ויומיים בזום  (מותנה בהנחיות ומגבלות הקורונה).

ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון. 
<h5 className="mt-4">
סטאז’ כולל פרויקט סיום
</h5>

משתתפי הקורס יידרשו לבצע תהליך מחקר, אבחון, אפיון ותכנון יישומי על בית, תוך שימוש במתודולוגיית העבודה של השיטה ההיברידית.

 
<h5 className="mt-4">
תעודת הסמכה
</h5>

לאחר הגשת פרויקט הסיום תוך עמידה ביעדי ואיכות הביצוע, תוענק תעודת הסמכה ״יועץ הבית ההיברידי״.
              </Fade>
             
            </span>
          </div>
      </section>
    </div>
  )
}

export default HybridScreen