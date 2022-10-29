import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Form, Button, Container } from "react-bootstrap"
import { updateModule, getSingleModule } from "../actions/ModuleActions"
import Loader from "../components/Loader"
import axios from "axios"
import Message from "../components/Message"

const EditModuleScreen = ({history, match}) => {
    
    const [id, setId] = useState("")
    const [type, setType] = useState()
    const [order, setOrder] = useState("")
    const [photos, setPhotos] = useState([])
    const [bgColor, setBgColor] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [textColor, setTextColor] = useState("")

    const dispatch = useDispatch()
    const {oldModule} = useSelector((state) => state.SingleModuleReducer)
    const {loading, updatedModule, success, error} = useSelector((state) => state.moduleUpdateReducer)
    const {userInfo} = useSelector((state) => state.userInfo)
    
const uploadFileHandler = async (e, fi) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        

        try {
        const config = {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        }

        const { data } = await axios.post('http://localhost:5000/upload', formData, config)
        console.log(data)
        setPhotos([...photos.slice(0, fi), data, ...photos.slice(fi, -1)])
        
        } catch (error) {
            console.log(error)
        }
  }

    function fileInputHandler() {
        var fileInputs = []
        for (let i = 0; i < type; i++) {
            fileInputs.push(i)
        }
        return fileInputs
    }

    useEffect(() => {
        dispatch(getSingleModule(match.params.id))
    }, [history])

    useEffect(() => {
        if(oldModule && id !== oldModule._id) {
            setId(oldModule._id)
            setType(oldModule.type)
            setOrder(oldModule.order)
            setPhotos(oldModule.photos)
            setBgColor(oldModule.bgColor)
            setTitle(oldModule.title)
            setText(oldModule.text)
            setTextColor(oldModule.textColor)
        }
    }, [oldModule])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        dispatch(updateModule(id, {
            type: type,
            order: order,
            photos: photos,
            bgColor: bgColor,
            title: title, 
            text: text,
            textColor: textColor
        }))
    }

  return (
        <Container className="mt-5">
        {
            userInfo ?
            <div>
                 {
            loading && <Loader />
        }
        { 
            success && <Message variant="success">עריכה התבצעה בהצלחה</Message>
        }
        { error 
        ? <div>{error.message}</div> 
        : <Form onSubmit={(e) => handleSubmit(e)} style={{textAlign: "right", direction: 'rtl'}}>
            <br />
            <br />
            
            <h1>עריכת מודול</h1>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>כותרת</Form.Label>
                <Form.Control onChange={(e) => setTitle(e.target.value)} 
                type="text" value={title} placeholder="הכניסי כותרת" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>טקסט</Form.Label>
                <Form.Control onChange={(e) => setText(e.target.value)} 
                type="text" value={text} placeholder="הכניסי טקסט" />
            </Form.Group>
            <Form.Group>
                <Form.Label>בחרי צבע רקע</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    value={bgColor}
                    title="Choose your color"
                    onChange={(e) => setBgColor(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>בחרי צבע טקסט</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    value={textColor}
                    title="Choose your color"
                    onChange={(e) => setTextColor(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                {type > 0 && <Form.Label>בחרי תמונה</Form.Label>}
                {
                   fileInputHandler().map((fi) =>
                    <div>
                        <div> תמונה מספר {fi + 1}</div>
                        <Form.Control type="file" onChange={(e) => uploadFileHandler(e, fi)}/>
                    </div>
                   )
                }               
            </Form.Group> 
            <div className="text-center">
                <Button variant="primary" type="submit">
                שמירת שינויים
                </Button>
            </div>
            
        </Form>
            }
            </div>
        :
        <Message variant="danger">אינך מורשה לצפות </Message>   
    }
       
    </Container>
  )
}

export default EditModuleScreen