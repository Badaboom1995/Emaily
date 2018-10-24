import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header.js';
import Home from '../components/Home';
import GoalsDashboard from '../components/GoalsDashboard.js';
import AddTarget from '../components/AddTarget.js';
import Quests from '../components/Quests.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute';



const AppRouter = () => (
    <BrowserRouter>
        <div className='dashboard'>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact={true}/>
                <PrivateRoute path='/goals-dashboard' component={GoalsDashboard}/>
                <PrivateRoute path='/add-target' component={AddTarget}/>
                <PrivateRoute path='/quests' component={Quests}/>
                <Route component={NotFoundPage}/>
            </Switch>     
        </div>
    </BrowserRouter>
);

export default AppRouter
