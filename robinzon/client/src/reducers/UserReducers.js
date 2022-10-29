export default (state={}, action) => {
    switch(action.type) {
        case 'LOGIN_ATTEMPT':
            return {loading: true}
        case 'LOGIN':
            return {loading: false, userInfo: action.payload, success: true}
        case 'LOGIN_FAIL':
            return {loading: false, error: action.payload, success: false}
        default:
            return state
    }
}