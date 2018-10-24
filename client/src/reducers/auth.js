const authReducerDefaultState = {
    userID: undefined,
    sessionStarted: false
}

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
           return {
               ...state,
               userID: action.userID
           };
        case 'UNSET_USER_ID':
           return {
               ...state,
               userID: null
           };
        default:
            return state
    }
}
