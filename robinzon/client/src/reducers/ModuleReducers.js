export const moduleReducer = (modules=[], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE': 
            return [...modules, action.payload]
        default:
            return modules
    }
}

export const moduleUpdateReducer = (modules=[], action) => {
    switch(action.type) {
        case 'UPDATE': 
            return {loading: true}
        case 'UPDATE_SUCCESS':
            return {loading: false, updatedModule: action.payload, success: true} 
        case 'UPDATE_FAIL':
            return {loading: false, error: action.payload, success: false} 
        default:
            return {}
    }
}

export const moduleCreateReducer = (modules=[], action) => {
    switch(action.type) {
        case 'CREATE_ATTEMPT': 
            return {loading: true}
        case 'CREATE_SUCCESS':
            return {loading: false, createdModule: action.payload, success: true} 
        case 'CREATE_FAIL':
            return {loading: false, error: action.payload, success: false} 
        default:
            return {}
    }
}
        

export const SingleModuleReducer = (state={}, action) => {
    switch(action.type) {
        case 'SINGLE_MODULE_SUCCESS':
            return {oldModule: action.payload, success: true}
        case 'SINGLE_MODULE_FAIL': 
            return {error: action.payload, success: false}
        default:
            return {}
    }
}
export const deleteModuleReducer = (state = {}, action) => {
    switch(action.type) {
        case 'MODULE_DELETE':
            return { message: "success"}
        case 'MODULE_DELETE_FAIL':
            return {message: action.payload}
        default:
            return {}
    }
}