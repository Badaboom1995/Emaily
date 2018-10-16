import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import Home from '../components/Home.js';
import GoalsDashboard from '../components/GoalsDashboard.js';
import AddTarget from '../components/AddTarget.js';
import Quests from '../components/Quests.js';
import NotFoundPage from '../components/NotFoundPage.js';



const AppRouter = () => (
    <BrowserRouter>
    <div className='dashboard'>
        <Header/>
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/goals-dashboard' component={GoalsDashboard}/>
            <Route path='/add-target' component={AddTarget}/>
            <Route path='/quests' component={Quests}/>
            <Route component={NotFoundPage}/>
        </Switch>     
    </div>
    </BrowserRouter>
);

export default AppRouter
