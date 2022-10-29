export const moduleUpReducer = (state={}, action) => {
    switch(action.type) {
        case 'MODULE_UP_ATTEMPT':
            return { loading: true }
        case 'MODULE_UP_SUCCESS':
            return { modules: action.payload, loading: false, success: true }
        case 'MODULE_UP_FAIL':
            return {loading: false, success: false}
        default:
            return {}
    }
}

export const moduleDownReducer = (state={}, action) => {
    switch(action.type) {
        case 'MODULE_DOWN_ATTEMPT':
            return { loading: true }
        case 'MODULE_DOWN_SUCCESS':
            return { modules: action.payload, loading: false, success: true }
        case 'MODULE_DOWN_FAIL':
            return {loading: false, success: false}
        default:
            return {}
    }
}