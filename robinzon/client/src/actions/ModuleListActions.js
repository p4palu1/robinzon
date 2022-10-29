import * as api from "../api"

export const moveUpModule = (order) => async(dispatch) => {
    try{
        dispatch({ type: 'MODULE_UP_ATTEMPT'})
        const { data } = await api.moduleUp(order)
        dispatch({ type: 'MODULE_UP_SUCCESS', payload: data})
    } catch (error) {
        console.log(error.message)
         dispatch({type: 'MODULE_UP_FAIL', payload: error.message})
    }
}

export const moveDownModule = (order) => async(dispatch) => {
    try{
        dispatch({ type: 'MODULE_DOWN_ATTEMPT'})
        const { data } = await api.moduleDown(order)
        dispatch({ type: 'MODULE_DOWN_SUCCESS', payload: data})
    } catch (error) {
        console.log(error.message)
         dispatch({type: 'MODULE_DOWN_FAIL', payload: error.message})
    }
}