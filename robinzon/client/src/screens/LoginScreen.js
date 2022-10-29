import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getModules, login } from "../actions/UserActions"
import { Form, Container, Button } from "react-bootstrap"
import { withRouter } from 'react-router-dom'
import Message from "../components/Message"
import Loader from "../components/Loader"

const LoginScreen = ({history}) => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { loading, userInfo, success, error} = useSelector((state) => state.users)

    const handleSubmit  = (e) => {
        e.preventDefault()
        console.log(username, password)
        dispatch(login(username, password))
    }

    useEffect(() => {
        if(userInfo){
            history.push("/admin")
        }
    }, [userInfo, history, dispatch])

  return (
    <Container className="mt-5">
        { loading && <Loader />}
        { error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => setUsername(e.target.value)} 
                type="text" placeholder="Enter username" />
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    
      
    </Container>
  )
}

export default withRouter(LoginScreen)