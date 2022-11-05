export const getPopUpReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_POP_UP':
            return action.payload
        default:
            return state
    }
}

export const updatePopUpReducer = (state={}, action) => {
    switch (action.type) {
        case 'UPDATE_POP_UP_ATTEMPT':
            return {loading: true}
        case 'UPDATE_POP_UP_SUCCESS':
            return {popUp: action.payload, loading: false, success: true}
        case 'UPDATE_POP_UP_FAIL':
            return {error: action.payload, loading: false, success: false}
        default:
            return {}
    }
}