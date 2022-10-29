import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Form, Button, Container } from "react-bootstrap"
import { updatePopUp, getPopUp } from "../actions/PopUpActions"
import Loader from "../components/Loader"
import Message from "../components/Message" 

const EditPopUpScreen = ({history}) => {

    const [newPopUp, setNewPopUp] = useState({
        url: "",
        text: "",
        On: "",
        lastUpdated: Date.now()
    })

    const [url, setUrl] = useState("")
    const [text, setText] = useState("")
    const [on, setOn] = useState(true)
    const [id, setId] = useState("")

    const dispatch = useDispatch()
    const oldPopUp = useSelector((state) => state.getPopUpReducer)
    const {loading, popUp: nPopUp, success, error} = useSelector((state) => state.updatePopUpReducer)
    const { userInfo } = useSelector((state) => state.users)
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        dispatch(getPopUp())
    }, [history])

    useEffect(() => {
        if(oldPopUp && id !== oldPopUp._id) {
            setId(oldPopUp._id)
            setText(oldPopUp.text)
            setOn(oldPopUp.On)
            setUrl(oldPopUp.url)
        }
    }, [oldPopUp])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newPopUp)
        dispatch(updatePopUp({
            text: text,
            url: url,
            On: on,
            lastUpdated: Date.now()
        }))
    }

  return (
        <Container className="mt-5">
            {
                userInfo ?
                <div>
                     {loading && <Loader />}
            { success && <Message variant="success">שינוי בוצע בהצלחה</Message> }
        { error 
        ? <div>{error.message}</div> 
        : <Form onSubmit={(e) => handleSubmit(e)} style={{textAlign: "right", direction: 'rtl'}}>

            <br />
            <h1>עריכת פופ-אפ</h1>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>טקסט</Form.Label>
                <Form.Control onChange={(e) => setText(e.target.value)}
                type="text" placeholder="הכניסי טקסט" value={text} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>קישור</Form.Label>
                <Form.Control onChange={(e) => setUrl(e.target.value)} 
                type="text" placeholder="הכניסי קישור" value={url} />
            </Form.Group>
            <Form.Group>
                <Form.Label>פופ-אפ פועל?</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setOn(e.target.value)}>
                    <option value={true}>כן</option>
                    <option value={false}>לא</option>
                </Form.Select>
            </Form.Group>
            <div className="text-center mt-3">
                <Button variant="primary" type="submit">
               שמירת שינויים
                </Button>
            </div>
        </Form>
    }
    
                </div>
                :
    <Message variant="danger">אינך מורשה לצפות בעמוד זה</Message>
            }
           
    </Container>
  )
}

export default EditPopUpScreen