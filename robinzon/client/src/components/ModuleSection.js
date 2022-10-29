import React,  { useEffect, useState } from 'react'
import Module from './Module'
import p1 from "../css/photos/catava1.jpg"
import p2 from "../css/photos/catava2.jpg"
import p3 from "../css/photos/interior2.jpg"
import p4 from "../css/photos/interior3.jpg"
import p5 from "../css/photos/sq1.jpg"
import p6 from "../css/photos/sq2.webp"
import p7 from "../css/photos/interior1.jpg"
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux"
import { getModules, deleteModule } from "../actions/ModuleActions"
import { Button } from "react-bootstrap"
import Loader from "./Loader"
import { moveUpModule, moveDownModule } from '../actions/ModuleListActions'

const ModuleSection = ({history}) => {

    const [someList, setSomeList] = useState([])

    const dispatch = useDispatch()
    const fetchedModules = useSelector((state) => state.moduleReducer) || []
    const {modules, loading, success} = useSelector((state) => state.moduleUpReducer)
    const {modules: dmodules, loading: dloading, success: dsuccess} = useSelector((state) => state.moduleDownReducer)
    const {message} = useSelector((state) => state.deleteModuleReducer) 

    const moduless = [
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
        }
    ]
    

    useEffect(() => {
        dispatch(getModules())
        console.log(fetchedModules);
        console.log(window.location.pathname.includes("admin"))
    }, [])

    useEffect(() => {

    }, [])


    const handleDelete = (id) => {
        dispatch(deleteModule(id))
        dispatch(getModules())
    }

    const handleEdit = (id, type) => {
        history.push(`/admin/edit/${id}?type=${type}`)
    }

    const handleUp = (order, id) => {
        dispatch(moveUpModule({order: order}))
        let i = fetchedModules.findIndex((m) => m.order === order + 1 )
        fetchedModules[i].order = order
        let j = fetchedModules.findIndex((m) => m.order === order && m._id === id) 
        fetchedModules[j].order = order + 1
    }

    const handleDown = (order, id) => {
        dispatch(moveDownModule({order: order}))
        console.log('down')
        let i = fetchedModules.findIndex((m) => m.order === order - 1 )
        fetchedModules[i].order = order
        console.log(order)
        console.log(fetchedModules[i].order)
        let j = fetchedModules.findIndex((m) => m.order === order && m._id === id) 
        console.log(j)
        fetchedModules[j].order = order - 1
    }

    return(
        <div>
            
            {
                fetchedModules.sort(function(a, b){
                    return(b.order - a.order)
                }).map((mod, index) => 
                    <>
                        <Module type={mod.type || 0} photos={mod.photos} bgColor={mod.bgColor} title={mod.title} text={mod.text} textColor={mod.textColor}/>
                        {   
                            window.location.pathname.includes("admin") &&
                            <Button onClick={() => handleDelete(mod._id)}><i class="fa-solid fa-xmark"></i></Button>
                        }
                        {   
                            window.location.pathname.includes("admin") &&
                            <Button onClick={() => handleEdit(mod._id, mod.type)}><i class="fa-solid fa-pen-to-square"></i></Button>
                        }
                        {   
                            window.location.pathname.includes("admin") && fetchedModules.length - 1 !== mod.order &&
                            <Button onClick={() => handleUp(mod.order, mod._id)}><i class="fa-solid fa-arrow-up"></i></Button>
                        }
                        {   
                            window.location.pathname.includes("admin") &&  0 < mod.order &&
                            <Button onClick={() => handleDown(mod.order, mod._id)}><i class="fa-solid fa-arrow-down"></i></Button>
                        }
                    </>
                )
            }
        </div>
    )
}
    
export default withRouter(ModuleSection)