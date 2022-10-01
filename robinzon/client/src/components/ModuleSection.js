import React from 'react'
import Module from './Module'
import p1 from "../css/photos/catava1.jpg"
import p2 from "../css/photos/catava2.jpg"
import p3 from "../css/photos/interior2.jpg"
import p4 from "../css/photos/interior3.jpg"
import p5 from "../css/photos/sq1.jpg"
import p6 from "../css/photos/sq2.webp"
import p7 from "../css/photos/interior1.jpg"

const ModuleSection = () => {
    
    const modules = [
        {
            type: 0, 
            photos: [],
            bgColor: 'gray',
            title: 'הבית ההיברידי',
            text: 'שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. יום אחד פרונטלי ויומיים בזום (מותנה בהנחיות ומגבלות הקורונה). ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון.',
            textColor: 'white'
        },
        {
            type: 1, 
            photos: [p1],
            bgColor: 'white',
            title: 'הבית ההיברידי',
            text: 'שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. יום אחד פרונטלי ויומיים בזום (מותנה בהנחיות ומגבלות הקורונה). ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון.',
            textColor: 'black'
        },
        {
            type: 2, 
            photos: [p3, p4],
            bgColor: '#2F685E',
            title: 'הבית ההיברידי',
            text: 'שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. יום אחד פרונטלי ויומיים בזום (מותנה בהנחיות ומגבלות הקורונה). ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון.',
            textColor: 'white'
        },
        {
            type: 3, 
            photos: [p7, p5, p6],
            bgColor: '#3F3B5B',
            title: 'הבית ההיברידי',
            text: 'שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. יום אחד פרונטלי ויומיים בזום (מותנה בהנחיות ומגבלות הקורונה). ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון.',
            textColor: 'white'
        },
        {
            type: 4, 
            photos: [p4, p7, p5, p6],
            bgColor: 'white',
            title: 'הבית ההיברידי',
            text: 'שלושה ימים מרוכזים של תכנים מקצועיים, תיאורטיים ופרקטיים של השיטה ההיברידית. יום אחד פרונטלי ויומיים בזום (מותנה בהנחיות ומגבלות הקורונה). ההכשרה תועבר באופן אישי ע״י מפתחי השיטה: תמיר ליאון ואורלי רובינזון.',
            textColor: 'black'
        }
    ]

    return(
        <div>
            {
                modules.map(mod => 
                
                    <Module type={mod.type} photos={mod.photos} bgColor={mod.bgColor} title={mod.title} text={mod.text} textColor={mod.textColor} />
                )
            }
        </div>
    )
}
    
export default ModuleSection