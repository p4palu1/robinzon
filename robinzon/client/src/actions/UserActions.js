import * as api from "../api"

//Action creators
export const login = (username, password) => async (dispatch) => {

    try{
        dispatch({type: 'LOGIN_ATTEMPT'})
        const user = await api.userLogin(username, password)
        dispatch({ type: 'LOGIN', payload: user})
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.message})
    }
}

export const getModules = () => async (dispatch) => {
    try{
        const { data } = await api.fetchModules()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}
