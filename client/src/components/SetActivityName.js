import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetGoalType extends React.Component {

    onActivityChange = (e) => {
        e.persist();
        this.props.onActivityChange(e.target.value);
        this.props.next(e)
    }
    render(){
        return (
            <div className='add-target__card-type'>
                <h3 className = 'add-target__card-title'>Уточните цель</h3>
                <div className='set-activity-type'>
                    
                </div>
            </div>
        )
    }
}


export default addTargetCard(SetGoalType)