import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoalDemo from './GoalDemo';
import { switchHeader } from '../actions/general'


class GoalsDashboard extends React.Component {
    componentWillMount(){
        this.props.dispatch(switchHeader(true))
    }
    render(){
        {console.log(this.props)}
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
                        {this.props.goals && this.props.goals.map((item, index) => {
                            return <GoalDemo key = {index} onDashboard = {true} difficulty={item.difficulty } areas = {item.areas} title = {item.name} duration = {item.duration} priority = {item.priority}/>
                        })}
                    </div>
                    <Link className = 'goals-dashboard__add-goal' to = '/add-target'>Add goal</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    goals: state.goals,
    general: state.general
})


export default connect(mapStateToProps)(GoalsDashboard);
