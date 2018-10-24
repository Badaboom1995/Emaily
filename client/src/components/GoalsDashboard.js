import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoalDemo from './GoalDemo';
import { switchHeader } from '../actions/general'
import { addGoal } from '../actions/goals';
import { fire } from '../firebase/firebase';
import uuid from 'uuid';


class GoalsDashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(switchHeader(true));
        const databaseUsers = fire.database().ref(`users`);
        // Синхронизация Firebase и Redux. STARTS
        databaseUsers.on('value', (snapshot) => {
            if (!this.props.goals.length) {
                    snapshot.child(`${this.props.user.userID}/goals`).forEach((childSnapshot) => {
                        const goal = {
                            id: childSnapshot.key,
                            name: childSnapshot.val().name,
                            duration : childSnapshot.val().duration,
                            areas: childSnapshot.val().areas,
                            difficulty: childSnapshot.val().difficulty,
                            priority:childSnapshot.val().priority
                        }
                        console.log(childSnapshot.val());
                        this.props.dispatch(addGoal(goal))
                    })
            }
        })
        // Синхронизация Firebase и Redux. ENDS
    }
    render(){
        return(
            <div className='goals-dashboard'>
                <aside className="goals-dashboard__aside-menu">
                    <ul className="goals-dashboard__nav-list">
                        <li className="goals-dashboard__nav-item"><a href="#" className = 'goals-dashboard__nav-link'>Some item</a></li>
                        <li className="goals-dashboard__nav-item"><a href="#" className = 'goals-dashboard__nav-link'>Some another item</a></li>
                    </ul>
                </aside>
                <div className="goals-dashboard__main-screen">
                    <div className="goals-dashboard__goals-list">
                        {this.props.goals ? this.props.goals.map((item, index) => {
                            return <GoalDemo key = {item.id} id = {item.id} onDashboard = {true} difficulty={item.difficulty } areas = {item.areas} title = {item.name} duration = {item.duration} priority = {item.priority}/>
                        }) : <p> Здесь пока пусто.. </p>}
                    </div>
                    <Link className = 'goals-dashboard__add-goal' to = '/add-target'>Add goal</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goals: state.goals,
    general: state.general,
    user: state.auth
})


export default connect(mapStateToProps)(GoalsDashboard);
