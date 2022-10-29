import * as api from "../api"

export const getPopUp = () => async (dispatch) => {
    try{
        const { data } = await api.getPopUpMessage()
        dispatch({ type: 'GET_POP_UP', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePopUp = (updatedPopUp) => async(dispatch) => {
    try {
        dispatch({ type: 'UPDATE_POP_UP_ATTEMPT'})
        const { data } = await api.updatePopUp(updatedPopUp)
        dispatch({ type: 'UPDATE_POP_UP_SUCCESS', payload: data})
    } catch (error){
        console.log(error)
        dispatch({ type: 'UPDATE_POP_UP_FAIL', payload: error})
    }
}