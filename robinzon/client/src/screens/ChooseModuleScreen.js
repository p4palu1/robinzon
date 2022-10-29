import React from 'react'
import { Container, Button } from "react-bootstrap"


const ChooseModuleScreen = ({history}) => {
    const arr = [0, 1, 2, 3, 4]
    const handleChoice = (type) => {
        history.push(`/admin/create?type=${type}`)
    }

    return (
        <Container>
            <h1 className='text-end'> בחרי סוג מודול ליצירה</h1>
            <div className='text-center'>
                {
                arr.map((i) => 
                    <div className="mt-4">
                        <Button onClick={() => handleChoice(i)}>{i} מודול סוג</Button>
                        <div>
                            מודול המכיל {i} תמונות
                        </div>
                    </div>
                )
                }
            </div>
        </Container>
  )
}

export default ChooseModuleScreen