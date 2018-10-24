import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css' ;
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setUserID, unsetUserID } from './actions/auth';
import { clearGoals } from './actions/goals';
import { fire } from './firebase/firebase';


const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
});

console.log(store.getState());

fire.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(setUserID(user.uid));
    } else {
        store.dispatch(unsetUserID());
        store.dispatch(clearGoals());
    }
})

ReactDOM.render(
    <Provider store = { store }>
        <AppRouter />
    </Provider> ,
     document.getElementById("root")
);


