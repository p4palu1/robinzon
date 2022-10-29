export default (users=[], action) => {
    switch(action.type) {
        case 'LOGIN':
            return {userInfo: action.payload}
        case 'LOGIN_FAIL':
            return { error: action.payload}
        case 'FETCH_ALL':
            return action.payload
        default:
            return users
    }
}