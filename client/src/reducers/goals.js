
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOAL':
           return [
               ...state,
               action.goal
           ];
        case 'REMOVE_GOAL':
            return state.filter(({ id }) => action.id != id )
        case 'UPDATE_GOAL':
            return state.map((item) => {
                if (action.id === item.id) {
                    return (item)
                } else {
                    return item
                }                
           })
        case 'CLEAR_GOALS':
            return []
        default:
            return state
    }
}
