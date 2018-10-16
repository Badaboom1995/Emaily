const generalReducerDefaultState = {
    headerVisible: true,
}

export default (state = generalReducerDefaultState, action) => {
    switch (action.type) {
        case 'SWITCH_HEADER':
           return {
               ...state,
               headerVisible: action.headerVisible
           };
        default:
            return state
    }
}
