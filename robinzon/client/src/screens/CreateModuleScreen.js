import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Form, Container, Button } from "react-bootstrap"
import { getModules, createModule } from "../actions/ModuleActions"
import { withRouter } from "react-router"
import axios from "axios"
import Message from '../components/Message'
import Loader from "../components/Loader"

const CreateModuleScreen = ({match, history}) => {

    const type = window.location.search.slice(6, 7)
    const dispatch = useDispatch()
    const modules = useSelector((state) => state.moduleReducer)
    const {loading, createdModule, success, error} = useSelector((state) => state.moduleCreateReducer)
    const {userInfo} = useSelector((state) => state.users)

    function arrfill(type){
        let arr= []
        for(let i = 0; i < type; i++){
                arr.push("")
            }
        return arr
    }
    
    const [newModule, setNewModule] = useState({
        type: type,
        order: 0,
        photos: arrfill(type),
        bgColor: "#563d7c",
        title: "",
        text: "",
        textColor: "#ffffff",
    })


    useEffect(() => {
        dispatch(getModules())   
    }, [history, dispatch])


    
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
        setNewModule({...newModule, photos: [...newModule.photos.slice(0, fi), data, ...newModule.photos.slice(fi+1, -1)]})
        
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newModule)
        dispatch(createModule({...newModule, order: modules.length}))
        dispatch(getModules())
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
                success && <Message variant="success">מודול נוצר בהצלחה</Message>
            }
        { error 
        ? <div>{error.message}</div> 
        : <Form onSubmit={(e) => handleSubmit(e)} style={{textAlign: "right", direction: 'rtl'}}>
            
            <h1>יצירת מודול חדש</h1>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>כותרת</Form.Label>
                <Form.Control onChange={(e) => setNewModule({...newModule, title: e.target.value})} 
                type="text" placeholder="הכניסי כותרת" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>טקסט</Form.Label>
                <Form.Control onChange={(e) => setNewModule({...newModule, text: e.target.value})} 
                type="text" placeholder="הכניסי טקסט" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>בחרי צבע רקע</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    onChange={(e) => setNewModule({...newModule, bgColor: e.target.value})}
                
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>בחרי צבע טקסט</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#ffffff"
                    title="Choose your color"
                    onChange={(e) => setNewModule({...newModule, textColor: e.target.value})}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>(חובה למלא לפי הסדר)</Form.Label>
                {type > 0 && <Form.Label>בחרי תמונה</Form.Label>}
                {
                   fileInputHandler().map((fi) =>
                    <div>
                        <div>תמונה מספר {fi + 1} </div>
                        <Form.Control type="file" onChange={(e) => uploadFileHandler(e, fi)} required/>
                    </div>
                   )
                }               
            </Form.Group> 
            <div className="text-center mt-3">
                <Button variant="primary" type="submit">
                    צרי מודול חדש
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

export default CreateModuleScreen