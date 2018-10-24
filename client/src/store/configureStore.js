// store creation
import { createStore, combineReducers } from 'redux';
import generalReducer from '../reducers/general';
import goalsReducer from '../reducers/goals';
import authReducer from '../reducers/auth';


export default () => {
    const store = createStore(
        combineReducers({
            goals: goalsReducer,
            general: generalReducer,
            auth: authReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return store;
}
