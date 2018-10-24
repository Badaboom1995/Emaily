import uuid from 'uuid';


export const addGoal = ({ name = '', duration = 0, areas = [], difficulty = '', priority = '', id = '' } = {}) => ({
    type: 'ADD_GOAL',
    goal: {
        id,
        name,
        duration,
        areas,
        difficulty,
        priority,

    }
})
export const removeGoal = (id) => ({
    type: 'REMOVE_GOAL',
    id
})
export const clearGoals = () => ({
    type: 'CLEAR_GOALS'
})