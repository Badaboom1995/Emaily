import uuid from 'uuid';


export const addGoal = ({ name = '', duration = 0, areas = [], difficulty = '', priority = '' } = {}) => ({
    type: 'ADD_GOAL',
    goal: {
        id: uuid(),
        name,
        duration,
        areas,
        difficulty,
        priority,

    }
})