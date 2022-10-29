import * as api from "../api"

//Action creators
export const getModules = () => async (dispatch) => {
    try{
        const { data } = await api.fetchModules()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const getSingleModule = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleModule(id)

    dispatch({
      type: 'SINGLE_MODULE_SUCCESS',
      payload: data,
    })
 
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: 'SINGLE_MODULE_FAIL',
      payload: message,
    })
  }
}

export const createModule = (post) => async (dispatch) => {
    try{
        console.log("trying to upload")
        dispatch({ type: 'CREATE_ATTEMPT'})
        const { data } = await api.createModule(post)
        dispatch({ type: 'CREATE_SUCCESS', payload: data})
        console.log("success")
    } catch (error) {
        console.log(error.message)
        dispatch({ type: 'CREATE_FAIL', payload: error.message})
    }
}


export const updateModule = (id, module) => async (dispatch) => {
    try{
        dispatch({ type: 'UPDATE'})
        const { data } = await api.updateModule(id, module)
        console.log(data)
        dispatch({ type: 'UPDATE_SUCCESS', payload: data})
    } catch (error) {
        console.log(error.message)
        dispatch({ type: 'UPDATE_FAIL', payload: error.message})
    }
}

export const deleteModule = (id) => async (dispatch) => {
  try {

   await api.deleteModule(id)

    dispatch({type: 'MODULE_DELETE'})
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: 'MODULE_DELETE_FAIL',
      payload: message,
    })
  }
}